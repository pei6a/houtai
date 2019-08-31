
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store"
import { Provider } from "react-redux"
import {HashRouter as Router,Route} from "react-router-dom";
import {nolayoutRouter} from "./router"
import routerEach from "./utils/routerEach"
let RouteCompontent=routerEach(nolayoutRouter)
ReactDOM.render(
    <Router>
    <Provider store={store}>
        <Route path="/" component={App}/>
        {RouteCompontent}
    </Provider>
    </Router>,
    document.getElementById('root')
);

//对路由进行封装
// {
//     nolayoutRouter.map((item,index)=>(
//         <Route path={item.path} key={index} render={()=>(
//             <item.component/>
//         )}/>
//     ))
// }

