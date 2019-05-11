import React from 'react';
import Events from './Events';
import './Home.css';

export default class Home extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <div className="wrapper">
                    <div className="box">
                        
                        <div className="recentEvent-container">
                        
                            <div className="lastEvent">
                            
                                <div className="recentEventInfo">
                                <div className="recentEvent">Publicado recentemente</div>
                                    <div className="events-Home-Image"><img className="events-Home-Img" src="http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2019/01/Belle-Trio.jpg"></img></div>
                                    <div className="event-title">BAILE DO PRETO E BRANCO</div>
                                    <div className="event-date">10/08/2019</div>
                                </div>
                            </div>
                            <div className="divider-vertical"></div>
                            <div className="feedBack-info">
                                <div className="feedBack-title">Feedback</div>
                                <h4 className="rating">Alcance:    10.000</h4>
                                <h4 className="retention">Retenção:    5.652</h4>
                                <h4 className="share-number">Compartilhamentos:    1.200</h4>
                                <h4 className="likes-number">Curtidas: 250</h4>
                                <h4 className="feedBack-time">Publicado em 10/07 às 10:30</h4>
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