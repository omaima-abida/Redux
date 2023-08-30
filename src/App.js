import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
// import ArticlesApp from './components/articles/ArticlesApp';
// import CategoriesApp from './components/categories/CategoriesApp';
// import ScategoriesApp from './components/scategories/ScategoriesApp';
import Listarticles from './components/articlesRedux/Listarticles';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
import NavScroll from './components/Navscroll';


function App() {
  return (
    <div>
      <Router>
    <NavScroll/>
      <Routes>
      <Route path='/' element={<Listarticles/>}/>
      <Route path='/articlesadmin' element={<ProductsAppAdmin/>}/>
    
    

      </Routes>

    </Router>
    
      
    </div>
  );
}

export default App;
