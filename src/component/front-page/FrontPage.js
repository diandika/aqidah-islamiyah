import React, {Component} from 'react';
import "./FrontPage.css";
import {Link} from "react-router-dom";

class FrontPage extends Component{
    render() {
        return(
            <div className="container front-page">
                <Link className="home-link" to="/home">
                    <div>
                        <h5 className="glow">Fenomena</h5>
                        <h3 className="glow">AQIDAH</h3>
                        <h5 className="glow">Islamiyah</h5>
                        <br/>
                        <br/>
                        <div>
                            <h5 className="animate-blinking">click to open</h5>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default FrontPage;