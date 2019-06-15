import React from 'react';
import './Events.css';
import { Link } from 'react-router-dom';
import AddEvents from '../widgets/AddEvents';
export default class Events extends React.Component {
    constructor() {
        super();
        this.state = {
            showPainel: true,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            showPainel: !this.state.showPainel
        });
    }

    render() {
        return (
            <div className="event-wrapper">
                <div className="events-list">
                    <div className="add-events-container">
                        <button className="add-event-button" onClick={this.toggle}><i className="fas fa-plus"></i></button>
                    </div>
                    <div className="published-events">Eventos publicados</div>
                    <Link className="events" to="/events/id">
                        <img className="event-events-Img" src="http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2019/01/Belle-Trio.jpg"></img>
                        <div className="events-event-info">
                            <div className="events-event-title">BAILE DO PRETO E BRANCO</div>
                            <div className="events-event-date">10/08/2019</div>
                            <div className="events-event-discription">
                                A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus,
                                não é uma zona de exportação, é uma zona para o Brasil.
                                Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito.
                                Derrubar arvores da natureza é muito lucrativo!
                            </div>
                        </div>
                        {/* <div className="info">
                            <div className="feedBack-info">
                                <h4 className="rating">Alcance:    10.000</h4>
                                <h4 className="retention">Retenção:    5.652</h4>
                                <h4 className="share-number">Compartilhamentos:    1.200</h4>
                                <h4 className="likes-number">Curtidas: 250</h4>
                                <h4 className="feedBack-time">Publicado em 10/07 às 10:30</h4>
                            </div>
                        </div> */}
                    </Link>
                    <div className="events">
                        <img className="event-events-Img" src="http://www.visitepetropolis.com/upload/blog/original/bauernfest---a-festa-do-colono-alemaoa-12-06-2017-10-38-58-2160.jpg"></img>
                        <div className="events-event-info">
                            <div className="events-event-title">BAILE DO PRETO E BRANCO</div>
                            <div className="events-event-date">10/08/2019</div>
                            <div className="events-event-discription">
                                A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus,
                                não é uma zona de exportação, é uma zona para o Brasil.
                                Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito.
                                Derrubar arvores da natureza é muito lucrativo!
                            </div>
                        </div>
                        {/* <div className="info">
                            <div className="feedBack-info">
                                <h4 className="rating">Alcance:    10.000</h4>
                                <h4 className="retention">Retenção:    5.652</h4>
                                <h4 className="share-number">Compartilhamentos:    1.200</h4>
                                <h4 className="likes-number">Curtidas: 250</h4>
                                <h4 className="feedBack-time">Publicado em 10/07 às 10:30</h4>
                            </div>
                        </div> */}
                    </div>
                    <div className="events">
                        <img className="event-events-Img" src="http://s3.amazonaws.com/voudeexc_img/main_images/5696/original/bauernfest.png?1520361513"></img>
                        <div className="events-event-info">
                            <div className="events-event-title">BAILE DO PRETO E BRANCO</div>
                            <div className="events-event-date">10/08/2019</div>
                            <div className="events-event-discription">
                                A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus,
                                não é uma zona de exportação, é uma zona para o Brasil.
                                Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito.
                                Derrubar arvores da natureza é muito lucrativo!
                            </div>
                        </div>
                        {/* <div className="info">
                            <div className="feedBack-info">
                                <h4 className="rating">Alcance:    10.000</h4>
                                <h4 className="retention">Retenção:    5.652</h4>
                                <h4 className="share-number">Compartilhamentos:    1.200</h4>
                                <h4 className="likes-number">Curtidas: 250</h4>
                                <h4 className="feedBack-time">Publicado em 10/07 às 10:30</h4>
                            </div>
                        </div> */}
                    </div>
                    <div className="events">
                        <img className="event-events-Img" src="http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2019/01/Belle-Trio.jpg"></img>
                        <div className="events-event-info">
                            <div className="events-event-title">BAILE DO PRETO E BRANCO</div>
                            <div className="events-event-date">10/08/2019</div>
                            <div className="events-event-discription">
                                A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus,
                                não é uma zona de exportação, é uma zona para o Brasil.
                                Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito.
                                Derrubar arvores da natureza é muito lucrativo!
                            </div>
                        </div>
                        {/* <div className="info">
                            <div className="feedBack-info">
                                <h4 className="rating">Alcance:    10.000</h4>
                                <h4 className="retention">Retenção:    5.652</h4>
                                <h4 className="share-number">Compartilhamentos:    1.200</h4>
                                <h4 className="likes-number">Curtidas: 250</h4>
                                <h4 className="feedBack-time">Publicado em 10/07 às 10:30</h4>
                            </div>
                        </div> */}
                    </div>
                    <div className="events">
                        <img className="event-events-Img" src="http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2019/01/Belle-Trio.jpg"></img>
                        <div className="events-event-info">
                            <div className="events-event-title">BAILE DO PRETO E BRANCO</div>
                            <div className="events-event-date">10/08/2019</div>
                            <div className="events-event-discription">
                                A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus,
                                não é uma zona de exportação, é uma zona para o Brasil.
                                Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito.
                                Derrubar arvores da natureza é muito lucrativo!
                            </div>
                        </div>
                        {/* <div className="info">
                            <div className="feedBack-info">
                                <h4 className="rating">Alcance:    10.000</h4>
                                <h4 className="retention">Retenção:    5.652</h4>
                                <h4 className="share-number">Compartilhamentos:    1.200</h4>
                                <h4 className="likes-number">Curtidas: 250</h4>
                                <h4 className="feedBack-time">Publicado em 10/07 às 10:30</h4>
                            </div>
                        </div> */}
                    </div>
                    <div className="events">
                        <img className="event-events-Img" src="http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2019/01/Belle-Trio.jpg"></img>
                        <div className="events-event-info">
                            <div className="events-event-title">BAILE DO PRETO E BRANCO</div>
                            <div className="events-event-date">10/08/2019</div>
                            <div className="events-event-discription">
                                A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus,
                                não é uma zona de exportação, é uma zona para o Brasil.
                                Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito.
                                Derrubar arvores da natureza é muito lucrativo!
                            </div>
                        </div>
                        {/* <div className="info">
                            <div className="feedBack-info">
                                <h4 className="rating">Alcance:    10.000</h4>
                                <h4 className="retention">Retenção:    5.652</h4>
                                <h4 className="share-number">Compartilhamentos:    1.200</h4>
                                <h4 className="likes-number">Curtidas: 250</h4>
                                <h4 className="feedBack-time">Publicado em 10/07 às 10:30</h4>
                            </div>
                        </div> */}
                    </div>
                    <div className="events">
                        <img className="event-events-Img" src="http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2019/01/Belle-Trio.jpg"></img>
                        <div className="events-event-info">
                            <div className="events-event-title">BAILE DO PRETO E BRANCO</div>
                            <div className="events-event-date">10/08/2019</div>
                            <div className="events-event-discription">
                                A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus,
                                não é uma zona de exportação, é uma zona para o Brasil.
                                Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito.
                                Derrubar arvores da natureza é muito lucrativo!
                            </div>
                        </div>
                        {/* <div className="info">
                            <div className="feedBack-info">
                                <h4 className="rating">Alcance:    10.000</h4>
                                <h4 className="retention">Retenção:    5.652</h4>
                                <h4 className="share-number">Compartilhamentos:    1.200</h4>
                                <h4 className="likes-number">Curtidas: 250</h4>
                                <h4 className="feedBack-time">Publicado em 10/07 às 10:30</h4>
                            </div>
                        </div> */}
                    </div>
                </div>
                <AddEvents showPainel={this.state.showPainel}></AddEvents>
            </div>
        );
    }
}