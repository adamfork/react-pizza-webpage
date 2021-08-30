import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Pizzas from './components/Pages/Pizzas';
import Sortiment from './components/Pages/Sortiment';
import Apetizers from './components/Pages/Apetizers';
import Dips from './components/Pages/Dips';
import Beverages from './components/Pages/Beverages';
import Contact from './components/Pages/Contact';
import Cart from './components/Pages/Cart';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './components/CartContext';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop>
          <CartProvider>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/pizzas' exact component={Pizzas} />
              <Route path='/sortiment' exact component={Sortiment} />
              <Route path='/appetizers' exact component={Apetizers} />
              <Route path='/dips' exact component={Dips} />
              <Route path='/beverages' exact component={Beverages} />
              <Route path='/contact' exact component={Contact} />
              <Route path='/cart' exact component={Cart} />
            </Switch>
          </CartProvider>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
  );
};

export default App;
