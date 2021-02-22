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
            showDescription: false,
            overview: '',
            materi:[],
            description: '',
            ayat_list: [],
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
                    materi: materi[i].materi,
                    description: materi[i].materi[0].isi.text,
                    shown_ayat: {
                        text: '',
                        translation: '',
                        surah: '',
                        ayat: ''
                    },
                    ayat_list: materi[i].materi[0].isi.nash
                }
            }
        }
        fetch('https://api.quran.sutanlab.id/surah/' + this.state.materi[0].isi.nash[0].surah + '/' + this.state.materi[0].isi.nash[0].ayat)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        shown_ayat: {
                            text: result.data.text.arab,
                            translation: result.data.translation.id,
                            surah: this.state.materi[0].isi.nash[0].surah,
                            ayat: this.state.materi[0].isi.nash[0].ayat
                        }
                    });
                }
            );

        this
            .showAyat = this.showAyat.bind(this);
        this
            .loadAyatList = this.loadAyatList.bind(this);
        this.loadOverview = this.loadOverview.bind(this);
        this.showDescription = this.showDescription.bind(this);
    }

    componentDidMount() {
    }

    loadOverview(){
        let overview = this.state.materi;
        return overview.map((materi, i) => {
            return(
                <li onClick={() => this.showDescription(materi.id)}>
                    <pre className="text-font">{materi.judul}</pre>
                </li>
            )
        })
    }

    showDescription(id){
        let materi;
        for (var i=0; i < this.state.materi.length; i++){
            if (this.state.materi[i].id === id){
                materi = this.state.materi[i];
                break;
            }
        }
        console.log(materi);
        this.setState({
            showDescription: true,
            description: materi.isi.text,
            ayat_list: materi.isi.nash,
        });
        this.showAyat(materi.isi.nash[0].surah, materi.isi.nash[0].ayat);
    }

    showAyat(surah, ayat) {
        fetch('https://api.quran.sutanlab.id/surah/' + surah + '/' + ayat)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(this.state);
                    this.setState({
                        shown_ayat: {
                            text: result.data.text.arab,
                            translation: result.data.translation.id,
                            surah: surah,
                            ayat: ayat
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
        const OverviewComponent = () => (
            <div id="ayat">
                <div className="ayat-view">
                    <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={() => {
                        this.setState({showDescription: false});
                    }}/>
                    <br/>
                    <div>
                        {this.state.description}
                    </div>
                </div>
            </div>
        )
        return (
            <div className="container content-page">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="content-highlight">
                            <div className="content">
                                <pre className="text-font">{this.state.overview}</pre>
                                <ul>
                                {this.loadOverview()}
                                </ul>
                                {this.state.showDescription ? <OverviewComponent /> : null}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="content-box">
                            <div className="content">
                                <div className="arabic-font-style">
                                    {this.state.shown_ayat.text}
                                </div>
                                <br/>
                                <div>
                                {this.state.shown_ayat.translation}
                                </div>
                                <br/>
                                QS {this.state.shown_ayat.surah}:{this.state.shown_ayat.ayat}
                            </div>
                        </div>
                        <div className="ayat-list content-box">
                            <div className="content">
                                {this.loadAyatList()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentPage;