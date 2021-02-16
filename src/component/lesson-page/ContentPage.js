import React, {Component} from "react";
import "./ContentPage.css";

class ContentPage extends Component{
    render() {
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
                                <div className="ayat-item">
                                    QS 1:1
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentPage;