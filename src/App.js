import React, { Component } from 'react';
import AppStyle from './AppStyle';
import Home from './componets/Home/Home';
import Modulos from './componets/Modulos/Modulos';
import Amigos from './componets/Amigos/Amigos';
import Carteira from './componets/Carteira/Carteira';
import Objetivo from './componets/Objetivos/Objetivo';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserProfileCarol from'./carol.jpg';
import ModulosAbertos from './componets/Modulos/ModulosAbertos/ModulosAbertos';
import Juros from './componets/Modulos/ModulosAbertos/ExercicioJuros/Juros';


class App extends Component {
  render() {
    return (
      <div style={AppStyle.Corpo}>
        <Router>
          <div>
            <aside style={AppStyle.Menu}>

              <div style={AppStyle.Perfil}>
                <img src={UserProfileCarol} style={AppStyle.PerfilImg} />
                <h2 style={AppStyle.Nome}>Carol</h2>
                <h3 style={AppStyle.Nivel}>Nível 2</h3>
              </div>

                <ul style={AppStyle.NavMenu}>
                  <li style={AppStyle.Link}><Link to="/" style={AppStyle.Link}>Home</Link></li>
                  <li style={AppStyle.Link}><Link to="/Modulos" style={AppStyle.Link} >Módulos</Link></li>
                  <li style={AppStyle.Link}><Link to="/Amigos" style={AppStyle.Link}>Amigos</Link></li>
                  <li style={AppStyle.Link}><Link to="/Carteira" style={AppStyle.Link}>Carteira</Link></li>
                  <li style={AppStyle.Link}><Link to="/Objetivos" style={AppStyle.Link}>Objetivos</Link></li>
                  <li ><Link to="/ModuloAberto" style={AppStyle.LinkInvisivel}>Modelo Aberto</Link></li>
                </ul>
            </aside>

            <div style={AppStyle.Alinhar}>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Modulos" component={Modulos}/>
                <Route exact path="/Amigos" component={Amigos}/>
                <Route exact path="/Carteira" component={Carteira}/>
                <Route exact path="/Objetivos" component={Objetivo}/>
                <Route exact path="/ModuloAberto" component={ModulosAbertos}/>
            
            </div>
          </div>
        </Router>
      

      </div>
    );
  }
}

export default App;