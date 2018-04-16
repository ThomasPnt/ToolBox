var express = require('express')
var http = require('http')
import ReactDOMServer from 'react-dom/server'
import { createStore , Provider} from 'redux'
import { StaticRouter , Route } from 'react-router-dom'
import Global from './components/Global';
import Router from './router'

import { renderRoutes, matchRoutes } from "react-router-config"

const app = express();
const server = http.createServer(app)


app.use((req,res) => {
    const store = createStore(reducers, applyMiddleware(thunk))
    const {url} = req
    const promises = matchRoutes(routes,url).map(({routes , match}) => {
        return store.dispatch(routes.loadData(match))
    })
    Promise.all(promises).then(() => {
        const content = ReactDOMServer.renderToString(
            <Provider store = {store}>
                <StaticRouter location={req.url}>
                    {renderRoutes(Router)}
                </StaticRouter>
            </Provider>
        )
    })
    const serializedState = JSON.stringify(store.getState())
    res.send(`
    <html>
      <body>
        <div id="root">${content}</div>
        <script>
          window.__PRELOADED_STATE__ = ${serializedState}
        </script>
        <!-- Can include client-side JS files links here -->
      </body> 
    </html>`)
})

server.listen()
