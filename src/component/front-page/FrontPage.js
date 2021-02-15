import React, {Component} from 'react';
import "./FrontPage.css";
import {Link} from "react-router-dom";

class FrontPage extends Component{
    render() {
        return(
            <div className="container front-page">
                <Link className="home-link" to="/home">
                    <div>
                        <h4 className="glow">Fenomena</h4>
                        <h3 className="glow">AQIDAH</h3>
                        <h4 className="glow">Islamiyah</h4>
                        <br/>
                        <br/>
                        <div>
                            <h5>click to open</h5>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default FrontPage;