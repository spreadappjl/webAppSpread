import React from 'react';
import '../pages/UserPerfil.css'
import cell from '../assets/cell.png';

export default class UserPerfil extends React.Component {
    render() {
        return (
            <div className="UserPerfilWrapper">
                <div className="UserPerfilHeader"></div>
                <div className="UserPerfilBody">
                    <div className="card">
                        <div className="cardHeader"></div>
                        <div className="cardBody"></div>
                    </div>
                    <div className="UserEdition">
                        <img className="UserEditionCell" src={cell} alt=""></img>
                        <div className="preview-container">
                            <div className="backgroundImg"></div>
                            <div className="avatarImg"></div>
                            <div className="cardBody"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}