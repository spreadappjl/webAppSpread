import React from 'react';
import Events from './Events';
import './Home.css';

export default class Home extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <div className="wrapper">
                    <div className="box">
                        <div className="recentEvent">Publicado recentemente</div>
                        <div className="recentEvent-container">
                            <div className="lastEvent">
                                <div className="recentEventInfo">
                                    <div><img className="events-Home-Image" src="http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2019/01/Belle-Trio.jpg"></img></div>
                                    <div className="event-title">BAILE DO PRETO E BRANCO</div>
                                    <div className="event-date">10/08/2019</div>
                                </div>
                            </div>
                            <div className="divider-vertical"></div>
                            <div className="feedBack-info">
                                <div className="feedBack-title">Feedback</div>
                                <div className="rating">Alcance:    10.000</div>
                                <div className="retention">Retenção:    5.652</div>
                                <div className="share-number">Compartilhamentos:    1.200</div>
                                <div className="likes-number">Curtidas: 250</div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="userProfile-Home-Image"></div>
                    </div>
                    <div className="tool-box"></div>
                </div>
                <div className="visitorsGraph">
                    <img ></img>
                </div>
            </div>
        );
    }
}