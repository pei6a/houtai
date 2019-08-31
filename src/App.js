import React, { Component } from "react"
import { Switch, Redirect } from "react-router-dom"
import LayoutWrapper from "./layout/index"
import { layoutRouter } from "./router"
import routeEach from "./utils/routerEach"
let routeCompontent = routeEach(layoutRouter)
export default class App extends Component {
  render() {
    return (
      <Switch>
        <Redirect from="/" to="/home" exact />
        <LayoutWrapper>

          {routeCompontent}
        </LayoutWrapper>
      </Switch>
    )
  }
}


