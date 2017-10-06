import React from 'react';
import CSS from './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';

const App = ({ children }) => (
  <div className={CSS.App}>
    <Header className={CSS.AppHeader} />
    <div className={CSS.AppBody}>
      <div className={CSS.AppContent}>
        {children}
      </div>
      <Footer />
    </div>
  </div>
);
export default App;
