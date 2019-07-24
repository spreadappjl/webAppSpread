import React from 'react';
import '../widgets/Header.css';
import logocompleta from '../assets/logo-completa.png'

export default class Header extends React.Component {
    render() {
        return (
            <div className="Header-container" fixed='top'>
                <div className="Header-logo">
                    <button className="menu-button"><div className="logo-img"><i class="fas fa-bullhorn"></i>
                    </div></button>
                    <div className="logo">Spread</div>
                </div>
                
                <div className="Header-menu">
                <div className="Header-search">
                    <input className="search-bar" type="text" placeholder="Pesquisar"></input>
                    <button className="search-button"><i className="fas fa-search"></i></button>
                </div>
                    <button className="Header-notifications"><i className="far fa-bell"></i></button>
                    <button className="Header-logout"><i className="fas fa-sign-out-alt"></i></button>
                    <avatar className="Header-user">
                        <circleavatar className="Header-userImgProfile">
                            <img className="Header-userImgProfile" src="https://yoconciertos.com/wp-content/uploads/2017/12/7fa2bde8d2837784a847f8201686b257757a749f.jpg" />
                        </circleavatar>
                        {/* <div className="userName">Britney Before</div> */}
                    </avatar>
                </div>
            </div>
        );
    }
}