import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import { About } from './pages/AcercaDe/About';
import { Participar } from './pages/participar/Participar';
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
         <About />
        </Route>

        <Route path='/organizacion'>
         <Participar image='img/participar/participarInstitucion.png' grupo='organizacion' image2='img/participar/institucionResponsive.png' text='¿Trabajas en una organización pública o privada y crees que podemos hacer algo en conjunto? Ya sea que produzcan contenido relevante de la primera infancia, trabajen con personas que podrían usar la app o lleven a cabo cualquier otra acción relacionada. ¡Escribinos!' />
        </Route>

        <Route path='/instituciones'>
         <Participar image='img/participar/participarPrivado.png' grupo='instituciones' image2='img/participar/organizacionResponsive.png' text='Desarrollamos tecnología a medida para clínicas, hospitales y centros de primera infancia para que puedan hacer un mejor seguimiento de sus programas y sus beneficiarios. También desarrollamos informes y estadísticas para el diseño de políticas públicas basadas en evidencia.' />
        </Route>

        <Route path='/voluntariado'>
         <Participar image='img/participar/participarVoluntario.png' grupo='voluntariado' image2='img/participar/voluntarioResponsive.png' text='¿Te interesa ser parte de Dynamai? Si tenés habilidades de programación, diseño, marketing o querés compartir o difundir conocimientos relevantes de la primera infancia, ¡Escribinos!'/>
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
