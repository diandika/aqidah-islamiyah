import React, {Component} from 'react';
import "./HomePage.css";
import {Link} from "react-router-dom";
import data from '../../data/data.json';

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: data.silabus,
            id: data.silabus[4].id,
            image: data.silabus[4].imageUrl,
            name: data.silabus[4].nama
        }
        this.setThumbnail = this.setThumbnail.bind(this);
        this.showThumbnail = this.showThumbnail.bind(this);
    }

    setThumbnail(datas) {
        return (
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="content-thumbnail" onClick={() => this.showThumbnail(datas.id)}>
                    <div className="image">
                        <img className="product-img" src={process.env.PUBLIC_URL + datas.imageUrl}
                             alt={datas.imageUrl}/>
                    </div>
                </div>
            </div>
        )
    }

    thumbnail() {
        return this.state.data.map((datas, i) => this.setThumbnail(datas));
    }

    showThumbnail(id) {
        let silabus = this.state.data;
        for (var i = 0; i < silabus.length; i++) {
            if (silabus[i].id === id) {
                this.setState({
                    id: data.silabus[i].id,
                    image: process.env.PUBLIC_URL + silabus[i].imageUrl,
                    name: silabus[i].nama
                })
            }
        }
    }

    render() {
        return (
            <div className="container content-container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="container">
                            <div className="row list-container">
                                {this.thumbnail()}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-1 content-overview-sm"></div>
                    <div className="col-lg-5 col-md-5 content-overview-sm">
                        <div>
                            <div className="content-overview">
                                <div className="image">
                                    <img className="product-img" src={this.state.image} alt={this.state.image}/>
                                </div>
                                <div className="container content-description">
                                    <div className="row">
                                        <div className="col-3 content-lesson">
                                            BAB {this.state.id}
                                        </div>
                                        <div className="col-6 content-title">
                                            {this.state.name}
                                        </div>
                                        <div className="col-3 content-pages">
                                            Hal. 59-77
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="btn-container">
                                <Link to={"/p/" + this.state.id}>
                                <span className="btn-primary">
                                    MASUK
                                </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;