import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import Create from '../pages/Create';
import Event from '../pages/Event';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route path="/" element={<Home/>} />
            <Route path="/create/" element={<Create/>} />
            <Route path="/event/" element={<Event/>} />
             { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;