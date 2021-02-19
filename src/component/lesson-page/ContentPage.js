import React, {Component} from "react";
import "./ContentPage.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import data from '../../data/data.json';

class ContentPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: Number(props.match.params.id),
            showAyat: false,
            overview: '',
            highlight: {},
            ayat_list: {},
            shown_ayat:{
                text:'ayat',
                translation:'translation'
            }
        }
        let materi = data.materi;
        for (var i = 0; i < materi.length; i++) {
            if (materi[i].id === this.state.id) {
                this.state = {
                    id: materi[i].id,
                    overview: materi[i].rangkuman,
                    highlight: materi[i].highlight_ayat,
                    ayat_list: materi[i].list_ayat,
                    shown_ayat: {
                        text: '',
                        translation: ''
                    }
                }
            }
        }
        fetch('https://api.quran.sutanlab.id/surah/' + this.state.highlight.surah + '/' + this.state.highlight.ayat)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        highlight: {
                            text: result.data.text.arab,
                            translation: result.data.translation.id
                        }
                    });
                }
            );

        this
            .showAyat = this.showAyat.bind(this);
        this
            .loadAyatList = this.loadAyatList.bind(this);
    }

    componentDidMount() {
    }

    getAyat() {

    }

    showAyat(surah, ayat) {
        this.setState({
            showAyat: true,
        });
        fetch('https://api.quran.sutanlab.id/surah/' + surah + '/' + ayat)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(this.state);
                    this.setState({
                        shown_ayat: {
                            text: result.data.text.arab,
                            translation: result.data.translation.id
                        }
                    });
                }
            );
    }

    loadAyatList() {
        let ayats = this.state.ayat_list;
        return ayats.map((ayat, i) => {
            return (
                <div className="ayat-item" onClick={() => this.showAyat(ayat.surah, ayat.ayat)}>
                    QS {ayat.surah}:{ayat.ayat}
                </div>
            )
        });
    }

    render() {
        const AyatComponent = () => (
            <div id="ayat" className="ayat-view">
                <div className="content">
                    <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={() => {
                        this.setState({showAyat: false});
                    }}/>
                    <br/>
                    <div>
                        {this.state.shown_ayat.text}
                    </div>
                    <br/>
                    <div>
                        {this.state.shown_ayat.translation}
                    </div>
                </div>
            </div>
        )
        return (
            <div className="container content-page">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="content-highlight">
                            <div className="content-box">
                                <div className="content">
                                    {this.state.overview}
                                </div>
                            </div>
                            <div className="content-box">
                                <div className="content">
                                    {this.state.highlight.text}
                                    <br/>
                                    {this.state.highlight.translation}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="ayat-list">
                            <div className="content">
                                {this.loadAyatList()}
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