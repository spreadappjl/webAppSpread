import React from 'react';
import Events from './Events';
import './Home.css';

export default class Home extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <div className="title">Dashboard</div>
                <div className="wrapper">
                    <div className="box">
                        <div className="events-Home-Image"></div>
                    </div>
                    <div className="box">
                        <div className="userProfile-Home-Image"></div>
                     </div>
                </div>
                <div className="visitorsGraph">
                    <img ></img>
                </div>
            </div>
        );
    }
}