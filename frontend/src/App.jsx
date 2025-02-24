import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'
import About from './pages/About';
// import Services from './pages/Services';
import Articles from './pages/Articles';
import ArticleDetails from './components/articles/ArticleDetails';
import {articles} from './data/article.js'; 
import PageNotFound from './components/PageNotFound.jsx';
// import ContactUs from './pages/ContactUs.jsx'
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
       <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

          {/* List of all articles */}
          <Route path="/articles" element={<Articles articles={articles} />} />

          {/* Individual article (slug) */} 
          <Route path="/articles/:slug" element={<ArticleDetails articles={articles} />} />

          <Route path="*" element={<PageNotFound />} />
      
          {/* <Route path='/services' element={<Services />} /> */}
          {/* <Route path='/contact-us' element={<ContactUs />} /> */}

        </Route>
      </Routes>
    </Router>
  );
};

export default App;

