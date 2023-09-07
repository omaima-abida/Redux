import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
// import ArticlesApp from './components/articles/ArticlesApp';
// import CategoriesApp from './components/categories/CategoriesApp';
// import ScategoriesApp from './components/scategories/ScategoriesApp';
import Listarticles from './components/articlesRedux/Listarticles';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
import NavScroll from './components/Navscroll';
import { ToastContainer } from 'react-toastify';
import Cart from './components/articlesRedux/Cart';

import StripePayment from './components/articlesRedux/StripePayment';




function App() {
  return (
    <div>
      <ToastContainer/>
      <Router>
    <NavScroll/>
      <Routes>
      <Route path='/articlescard' element={<Listarticles/>}/>
      <Route path='/articlesadmin' element={<ProductsAppAdmin/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/pay/:total' element={<StripePayment/>}/>

    
    
    

      </Routes>

    </Router>
    
      
    </div>
  );
}

export default App;
