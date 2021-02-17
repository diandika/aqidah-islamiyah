import React, {Component} from "react";
import "./ContentPage.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

class ContentPage extends Component{

    constructor(props) {
        super(props);

        this.state = {
            showAyat: false
        }
        this.showAyat = this.showAyat.bind(this);
    }

    showAyat(state) {
        this.setState({
            showAyat: state
        })
    }

    render() {
        const AyatComponent = () => (
            <div id="ayat" className="ayat-view">
                <div className="content">
                    <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={() => {this.showAyat(false)}}/>
                    Ayat View
                </div>
            </div>
        )
        return(
            <div className="container content-page">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="content-highlight">
                            <div className="content-box">
                                <div className="content">
                                    konten
                                </div>
                            </div>
                            <div className="content-box">
                                <div className="content">
                                    ayat highlight
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="ayat-list">
                            <div className="content">
                                <div className="ayat-item" onClick={() => this.showAyat(true)}>
                                    QS 1:1
                                </div>
                                <div className="ayat-item">
                                    QS 1:1
                                </div>
                                <div className="ayat-item">
                                    QS 1:1
                                </div>
                                <div className="ayat-item">
                                    QS 1:1
                                </div>
                                <div className="ayat-item">
                                    QS 1:1
                                </div>
                                <div className="ayat-item">
                                    QS 1:1
                                </div>
                                <div className="ayat-item">
                                    QS 1:1
                                </div>
                                <div className="ayat-item">
                                    QS 1:1
                                </div>
                                <div className="ayat-item">
                                    QS 1:1
                                </div>
                                <div className="ayat-item">
                                    QS 1:1
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.showAyat ? <AyatComponent/> : null}
            </div>
        )
    }
}

export default ContentPage;