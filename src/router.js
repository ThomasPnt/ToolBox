import Global from "./components/Global";
import { getSomeData } from './actions/Actions';

const Router = [
    {
        path: "/",
        component: Global,
        loadData: () => getSomeData(),
    }
]

export default Router;
