import React from 'react';
import { Link } from 'react-router-dom'
import './SideBar.css';

export default class SideBar extends React.Component {
    render() {
        return (
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
                        <Link className="btn" to="/home">
                            <div className="list-group-item">
                                <li className="fa fa-home fa-fw icon" aria-hidden="true"></li>
                                Home
                            </div>
                        </Link>
                    </div>
                    <Link className="btn" to="/events">
                        <div className="list-group-item">
                            <li className="fa fa-book fa-fw icon" aria-hidden="true"></li>
                            Eventos
                        </div>
                    </Link>
                    <Link className="btn" to="/myaccount">
                        <div className="list-group-item">
                            <li className="fa fa-user-circle icon" aria-hidden="true"></li>
                            Minha conta
                                </div>
                    </Link>
                    <Link className="btn" to="/configurations">
                        <div className="list-group-item">
                            <li className="fa fa-cog fa-fw icon" aria-hidden="true"></li>
                            Configurações
                        </div>
                    </Link>
                    <div className="dividerHorizontal"></div>
                    <Link className="btn" to="/estatistics">
                        <div className="list-group-item">
                            <li className="fas fa-chart-bar" aria-hidden="true"></li>
                            Estatísticas
                        </div>
                    </Link>
                    <Link className="btn" to="/terms">
                        <div className="list-group-item">
                            <li className="fas fa-book" aria-hidden="true"></li>
                            Termos
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}