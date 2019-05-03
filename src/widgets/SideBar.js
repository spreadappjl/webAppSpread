import React from 'react';
import { Link } from 'react-router-dom'
import './SideBar.css';
import Home from '../pages/Home';

export default class SideBar extends React.Component {
    render() {
        return (
            <div className="SideBar">
                <div className="brandContainer">
                    <a className="list-group-item"><i className="fa fa-volume-up icon" aria-hidden="true"></i></a>
                    <div className="brandSpace">Spread</div>
                </div>
                <div className="userInfoSpace">
                    <div className="userInfo">
                        <div className="userImgProfile">
                            <img src="https://yoconciertos.com/wp-content/uploads/2017/12/7fa2bde8d2837784a847f8201686b257757a749f.jpg" />
                        </div>
                        <div className="userName">Britney Before</div>
                    </div>
                </div>
                <div className="dividerHorizontal"></div>
                <div className="menuList">
                    <div className="btn">
                        <a className="list-group-item" href="/home"><i className="fa fa-home fa-fw icon" aria-hidden="true"></i>Home</a>
                        <div className="content"></div>
                    </div>
                    <div className="btn">
                        <a className="list-group-item" href="/events"><i className="fa fa-book fa-fw icon" aria-hidden="true"></i>Eventos</a>
                        <div className="content"></div>
                    </div>
                    <div className="btn">
                        <a className="list-group-item" href="/myaccount"><i className="fa fa-user-circle icon" aria-hidden="true"></i></a>
                        <div className="content">Minha Conta</div>
                    </div>
                    <div className="btn">
                        <a className="list-group-item" href="/configurations"><i className="fa fa-cog fa-fw icon" aria-hidden="true"></i></a>
                        <div className="content">Configurações</div>
                    </div>
                    <div className="dividerHorizontal"></div>
                </div>
            </div>
        );
    }
}
