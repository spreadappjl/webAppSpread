import React from 'react';
import './Home.css';
import {Line} from 'react-chartjs-2';
import { Link } from 'react-router-dom';

const data = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEC"],
    datasets: [{
        label: "Data",
        borderColor: "#ebecf1",
        pointBorderColor: "#ebecf1",
        pointBackgroundColor: "#ebecf1",
        pointHoverBackgroundColor: "#ebecf1",
        pointHoverBorderColor: "#ebecf1",
        pointBorderWidth: 7,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        fill: true,
        borderWidth: 2.5,
        data: [140, 120, 140, 160, 160, 140, 140, 160, 140, 130, 140, 180]
    }],
};

export default class Home extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <div className="visitorsGraph">
                    <Line ref="visitorsGraph" data={data} height="79vh"/>
                </div>
                <div className="wrapper">
                    <div className="box">
                        <Link to="/events" className="recentEvent-container">
                            <div className="lastEvent">
                                <div className="recentEventInfo">
                                    <div className="recentEvent">Publicado recentemente</div>
                                    <div className="events-Home-Image"><img className="events-Home-Img" src="http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2019/01/Belle-Trio.jpg"></img></div>
                                    <div className="event-title">BAILE DO PRETO E BRANCO</div>
                                    <div className="event-date">10/08/2019</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <Link to="/public-perfil" className="box">
                        <Link to="/public-perfil" className="userProfile-Home-Image"></Link>
                    </Link>
                    <div className="box">
                        <div className="Graphics"></div>
                    </div>
                </div>
            </div>
        );
    }
}