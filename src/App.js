import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BtnWsp from './components/BtnWsp';
import Donar from './pages/Donar';
import Novedades from './pages/Novedades';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <BtnWsp />
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/acerca'>
          <Error404 />
        </Route>

        <Route path='/participa'>
          <Error404 />
        </Route>

        <Route path='/novedades'>
          <Novedades />
        </Route>
        
        <Route path='/contacto'>
          <Error404 />
        </Route>

        <Route path='/donar'>
          <Donar />
        </Route>

        <Route path='*'>
          <Error404 />
        </Route>

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
