import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import MyWork from "./components/MyWork";
import ErrorPage from "./404";

export default function Routes() {
   return(
       <BrowserRouter>
         <Sidebar />
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/did" component={MyWork} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={ErrorPage} />
         </Switch>
       </BrowserRouter>
   )
}