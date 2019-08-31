import React from "react"
import {Route}from "react-router-dom"
export default (routes)=>{
    const fn=(children)=>{
        // children相当于数组对象
       return children.map((item,index)=>(
            <Route path={item.path} key={index} render={()=>(
                <item.component/>
            )}/>
        ))


        //判断的是否有3级
        // return children.map((item,index)=>{
        //     if(item.children){
        //         return fn(item.children)
        //     }else{
        //         return <Route path={item.path} key={index} render={()=>(
        //             <item.component/>
        //         )}/>
        //     }
        // })
    }
    return routes.map((item,index)=>{
        // 如果有子级时怎么做  // 如果没有子级时怎么做
        if(item.children){
            return fn(item.children)
        }else{
            return <Route path={item.path} key={index} render={()=>(
                <item.component/>
            )}/>
        }
    })
    
}

// import React from "react";
// import { Route } from "react-router-dom";
// export default  (routes) => {
//     const fn = (children) => {
//         return children.map((item, index) => (
//             <Route path={item.path} key={index} render={() => (
//                 <item.component />
//             )} />
//         ))
//     }

//     return routes.map((item, index) => {

//         if (item.children) {
//             return fn(item.children);
//         } else {
//             return <Route path={item.path} key={index} render={() => (
//                      <item.component />
//             )} />
//         }
//     })

// }