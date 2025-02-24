import { Outlet } from 'react-router-dom';
import Footer from './home/Footer';
import Navbar from './home/Navbar';

const Layout = () => {
  return (
    <div>
      
      <header >
        <Navbar />
      </header>

      <main className='pt-20'>
        <Outlet /> {/* This is where the page content will be rendered */}
      </main>
    
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;