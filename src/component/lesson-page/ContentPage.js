import React, {Component} from "react";

class ContentPage extends Component{
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="content">
                            konten
                        </div>
                        <div className="highlight-ayat">
                            ayat highlight
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ayat-list">
                            Ayat list
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentPage;