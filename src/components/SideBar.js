import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

class SideBar extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">ALL CATEGORY</Link></li>
                    <ul>
                    {this.props.category.map((category) =>
                        <li key={category.id}>
                            <Link to={`/tool/${category.id}`}>
                                  {category.name}
                            </Link>
                        </li>
                        )}
                    </ul>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        category: state.CategoryReducer
    };
}

export default connect(mapStateToProps)(SideBar)