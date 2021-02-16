import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import FrontPage from "./component/front-page/FrontPage";

import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./component/home-page/HomePage";
import ContentPage from "./component/lesson-page/ContentPage";

class App extends Component{
    render (){
        return (
            <Router>
                <Route path="/" exact component={FrontPage}/>
                <Route path="/home" component={HomePage}/>
                <Route path="/p" component={ContentPage}/>
                <Route path="/author" component="AuthorPage"/>
            </Router>
        );
    }
}

export default App;
