import React from 'react';
import './Events-details.css';

export default class EventsDetails extends React.Component {
    render(){
        return(
            <div className="event-details-page">
                <div className="event-details-container">
                    <div className="event-details-info-graph">
                        <img className="event-details-img" src="http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2019/01/Belle-Trio.jpg"></img>
                        <div className="event-details-graphs"></div>
                    </div>
                    <div className="event-details-description-container">
                        <div className="event-details-title">BAILE DO PRETO E BRANCO</div>
                        <div className="event-details-date">10/08/2019</div>
                        <div className="event-details-discription">
                            A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, 
                            não é uma zona de exportação, é uma zona para o Brasil. 
                            Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. 
                            Derrubar arvores da natureza é muito lucrativo!
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}