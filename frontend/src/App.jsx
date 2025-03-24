import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'
import Articles from './pages/Articles';
import ArticleDetails from './components/articles/ArticleDetails';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import PageNotFound from './components/PageNotFound.jsx';
 
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
       <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path="/articles" element={<Articles  />} />  {/* List of all articles */}         
          <Route path="/articles/:slug" element={<ArticleDetails />} />  {/* Individual article (slug) */} 
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<AboutUs />} />


          <Route path="*" element={<PageNotFound />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;

