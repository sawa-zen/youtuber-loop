import React from 'react';
import CSS from './App.css';
import Header from './header/Header';

const App = ({ children }) => (
  <div className={CSS.App}>
    <Header className={CSS.AppHeader} />
    <div className={CSS.AppBackground}>
    </div>
    <div className={CSS.AppContent}>
      {children}
    </div>
  </div>
);
export default App;
