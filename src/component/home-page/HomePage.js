import React, {Component} from 'react';
import "./HomePage.css";
import {Link} from "react-router-dom";
import lesson1 from "../../img/lesson_1.png";
import lesson2 from "../../img/lesson_2.png";
import lesson3 from "../../img/lesson_3.png";
import lesson4 from "../../img/lesson_4.png";
import lesson5 from "../../img/lesson_5.png";
import lesson6 from "../../img/lesson_6.jpg";
import lesson7 from "../../img/lesson_7.jpg";

class HomePage extends Component{
    constructor(props){
        super(props);

        this.state = {
            image: lesson5,
            alt: "Lesson 5"
        }
        this.showThumbnail = this.showThumbnail.bind(this);
    }

    showThumbnail(thumb){
        switch (thumb){
            case "lesson1":
                this.setState({
                    image: lesson1,
                    alt: "lesson1"
                });
                break;
            case "lesson2":
                this.setState({
                    image: lesson2,
                    alt: "lesson2"
                });
                break;
            case "lesson3":
                this.setState({
                    image: lesson3,
                    alt: "lesson3"
                });
                break;
            case "lesson4":
                this.setState({
                    image: lesson4,
                    alt: "lesson4"
                });
                break;
            case "lesson6":
                this.setState({
                    image: lesson6,
                    alt: "lesson6"
                });
                break;
            case "lesson7":
                this.setState({
                    image: lesson7,
                    alt: "lesson7"
                });
                break;
            default:
                this.setState({
                    image: lesson5,
                    alt: "lesson5"
                });
        }
    }

    render() {
        return(
            <div className="container content-container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="container">
                            <div className="row list-container">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="content-thumbnail" onClick={() => this.showThumbnail("lesson1")}>
                                        <div className="image">
                                            <img className="product-img" src={lesson1} alt="lesson1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="content-thumbnail" onClick={() => this.showThumbnail("lesson2")}>
                                        <div className="image">
                                            <img className="product-img" src={lesson2} alt="lesson2" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="content-thumbnail" onClick={() => this.showThumbnail("lesson3")}>
                                        <div className="image">
                                            <img className="product-img" src={lesson3} alt="lesson3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="content-thumbnail" onClick={() => this.showThumbnail("lesson4")}>
                                        <div className="image">
                                            <img className="product-img" src={lesson4} alt="lesson4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="content-thumbnail" onClick={() => this.showThumbnail("lesson5")}>
                                        <div className="image">
                                            <img className="product-img" src={lesson5} alt="lesson5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="content-thumbnail" onClick={() => this.showThumbnail("lesson6")}>
                                        <div className="image">
                                            <img className="product-img" src={lesson6} alt="lesson6" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="content-thumbnail" onClick={() => this.showThumbnail("lesson7")}>
                                        <div className="image">
                                            <img className="product-img" src={lesson7} alt="lesson7" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-1 content-overview-sm"></div>
                    <div className="col-lg-5 col-md-5 content-overview-sm">
                        <div className="sticky-top">
                            <div className="content-overview">
                                <div className="image">
                                    <Link to="/p"><img className="product-img" src={this.state.image} alt={this.state.alt} /></Link>
                                </div>
                                <div className="container content-description">
                                    <div className="row">
                                        <div className="col-3 content-lesson">
                                            BAB V
                                        </div>
                                        <div className="col-6 content-title">
                                            SITUASI DAN KONDISI MASYARAKAT JAHILIYAH
                                        </div>
                                        <div className="col-3 content-pages">
                                            Hal. 59-77
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-container">
                                <span className="btn-primary">
                                    MASUK
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;