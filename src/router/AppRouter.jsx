import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import BlogDetails from '../pages/BlogDetails'
import NotFoundPage from '../pages/NotFoundPage'
import BlogList from '../pages/BlogList'
import Header from '../components/Header'
import DashBoard from '../pages/admin/DashBoard'
import BlogAdd from '../pages/admin/auth/BlogAdd'
import BlogEdit from '../pages/admin/auth/BlogEdit'
import Login from '../pages/admin/Login'


const AppRouter = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
        <Route path="/" exact       component={Home}></Route>
        <Route path="/blogs"  exact component={BlogList}></Route>
        <Route path="/blogs/:id"    component={BlogDetails}></Route>
        <Route path="/login"        component={Login}></Route>
        <Route path="/admin"        component={DashBoard}></Route>
        <Route path="/add"          component={BlogAdd}></Route>
        <Route path="/edit/:id"     component={BlogEdit}></Route>
        <Route                      component={NotFoundPage}></Route>
    </Switch>
    </BrowserRouter>
  )
}

export default AppRouter