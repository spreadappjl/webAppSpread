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
                        <div className="cardHeader">
                            <h2 className="cardTitle">Perfil Público</h2>
                        </div>
                        <div className="cardBody">
                            <div className="cardBody-content">
                                <div className="form-group-container">
                                    <div className="form-group-position">
                                        <div className="form-group">
                                            <label>Nome</label>
                                            <div className="form-control-container">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group-container">
                                    <div className="form-group-position">
                                        <div className="form-group">
                                            <label>Sobrenome</label>
                                            <div className="form-control-container">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardBody-content-2">
                                <div className="form-group-container">
                                    <div className="form-group-position">
                                        <div className="form-group">
                                            <label>Foto</label>
                                            <div className="form-control-container">
                                                <input type="file" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardBody-content-2">
                                <div className="form-group-container">
                                    <div className="form-group-position">
                                        <div className="form-group">
                                            <label>Imagem de fundo</label>
                                            <div className="form-control-container">
                                                <input type="file" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardBody-content">
                                <div className="form-group-container">
                                    <div className="form-group-position">
                                        <div className="form-group">
                                            <label>Cidade</label>
                                            <div className="form-control-container">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group-container">
                                    <div className="form-group-position">
                                        <div className="form-group">
                                            <label>Estado</label>
                                            <div className="form-control-container">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardBody-content-3">
                                <div className="form-group-container">
                                    <div className="form-group-position">
                                        <div className="form-group">
                                            <label>Sobre</label>
                                            <div className="form-control-container">
                                                <textarea type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="UserEdition">
                        <img className="UserEditionCell" src={cell} alt=""></img>
                        <div className="preview-container">
                            <div className="backgroundContainer">
                                <div className="blurbackgroundImg"></div>
                                <img className="backgroundImg"
                                    src="https://images.impresa.pt/blitz/2018-02-23-MattBellamyMuse.jpg/original/mw-860">
                                </img>
                                <div className="avatarImg"></div>
                                <div className="followbarContainer">
                                    <div className="followings">
                                        <h6>Seguidores</h6>
                                    </div>
                                    <input className="followbutton" type="button" value="Seguir"></input>
                                    <div className="events">
                                        <h6>Eventos</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="cardBody"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}