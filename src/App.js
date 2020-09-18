import React, {useState, useEffect} from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {ThemeProvider, createGlobalStyle} from 'styled-components'
import style from 'styled-theming'
import storage from 'local-storage-fallback'
import useTheme from './hooks/useTheme'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Header from './components/Header'
import { DataProvider } from './context/DataContext'
import GlobalStyle from './Style/GlobalTheme'


function App() {
  const theme = useTheme()
  
  return (
    //Setting up the theme globally.
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DataProvider>
    <div className="App">
    <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/country/:name">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
    </DataProvider>
    </ThemeProvider>
  );
}

export default App;
