import React from 'react';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div className="SideBar">
        <div className="brandContainer">
          <a className="list-group-item"><i class="fa fa-volume-up icon" aria-hidden="true"></i></a>
          <div className="brandSpace">Spread</div>
        </div>
        <div className="userInfoSpace">
          <div className="userInfo">
            <div className="userImgProfile">
              <img src="https://yoconciertos.com/wp-content/uploads/2017/12/7fa2bde8d2837784a847f8201686b257757a749f.jpg"/>
            </div>
            <div className="userName">Britney Before</div>
          </div>
        </div>
        <div className="dividerHorizontal"></div>
        <div className="menuList">
          <div className="btn">
          <a className="list-group-item"><i className="fa fa-home fa-fw icon" aria-hidden="true"></i></a>
            <div className="content">Home</div>  
          </div>
          <div className="btn">
          <a class="list-group-item"><i class="fa fa-book fa-fw icon" aria-hidden="true"></i></a>
            <div className="content">Eventos</div>  
          </div>
          <div className="btn">
          <a class="list-group-item"><i class="fa fa-user-circle icon" aria-hidden="true"></i></a>
            <div className="content">Minha Conta</div>  
          </div>
          <div className="btn">
          <a class="list-group-item"><i class="fa fa-cog fa-fw icon" aria-hidden="true"></i></a>
            <div className="content">Configurações</div>  
          </div>
          <div className="dividerHorizontal"></div>
        </div>
      </div>
      <div className="View"><Home/></div>
    </div>
  );
}

export default App;
