import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
// import ArticlesApp from './components/articles/ArticlesApp';
// import CategoriesApp from './components/categories/CategoriesApp';
// import ScategoriesApp from './components/scategories/ScategoriesApp';
import Listarticles from './components/articlesRedux/Listarticles';


function App() {
  return (
    <div>
      <Router>
    
      <Routes>
      <Route path='/' element={<Listarticles/>}/>
    
    

      </Routes>

    </Router>
    
      
    </div>
  );
}

export default App;
