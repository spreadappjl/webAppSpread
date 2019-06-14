import React from 'react';
import { NavLink, BrowserRouter, Switch } from 'react-router-dom'
import './SideBar.css';

export default class SideBar extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <div className="SideBar">
                        <div className="brandContainer">
                            <button className="list-group-item"><i className="fa fa-volume-up icon" aria-hidden="true"></i></button>
                            <div className="brandSpace">Spread</div>
                        </div>
                        {/* <div className="userInfoSpace">
                            <div className="userInfo">
                            </div>
                        </div> */}
                        <div className="menuList">
                            <div to="/home">
                                <a className="btn" href="/home">
                                    <div className="list-group-item">
                                        <li className="fa fa-home fa-fw icon" aria-hidden="true"></li>
                                        Home
                                    </div>
                                </a>
                            </div>
                            <a className="btn" href="/events">
                                <div className="list-group-item">
                                    <li className="fa fa-book fa-fw icon" aria-hidden="true"></li>
                                    Eventos
                                </div>
                            </a>
                            <a className="btn" href="/myaccount">
                                <div className="list-group-item">
                                    <li className="fa fa-user-circle icon" aria-hidden="true"></li>
                                    Minha conta
                                </div>
                            </a>
                            <a className="btn" href="/configurations">
                                <div className="list-group-item">
                                    <li className="fa fa-cog fa-fw icon" aria-hidden="true"></li>
                                    Configurações
                                </div>
                            </a>
                            <div className="dividerHorizontal"></div>
                            <a className="btn" href="/estatistics">
                                <div className="list-group-item">
                                    <li className="fas fa-chart-bar" aria-hidden="true"></li>
                                    Estatísticas
                                </div>
                            </a>
                            <a className="btn" href="/terms">
                                <div className="list-group-item">
                                    <li className="fas fa-book" aria-hidden="true"></li>
                                    Termos
                                </div>
                            </a>
                        </div>
                    </div>
                </Switch>
            </BrowserRouter>
        );
    }
}