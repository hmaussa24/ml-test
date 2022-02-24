import './Assets/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppFrame from './Shared/AppFrame';
import DetalleProducto from './Moduls/DetalleProducto';
import SearchProduct from './Moduls/SearchProduct';
import { NotFound } from './Componets/NotFound';

function App() {
  return (
    <BrowserRouter>
      <AppFrame>
        <Routes>
          <Route path='/' element={null} />
          <Route path='/items/:id' element={<DetalleProducto />} />
          <Route path='/items' element={<SearchProduct />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AppFrame>
    </BrowserRouter>
  );
}

export default App;
