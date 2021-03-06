import 'antd/dist/antd.css';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './config/theme/theme';
import Home from './pages/Home/Home';
import styled from 'styled-components';
import MoviesProvider from './context/MoviesContext';
import AppProvider from './context/AppContext';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Error from './pages/Error';
import ErrorBoundary from './components/ErrorBoundary';

const AppRoot = styled.div`
  width: 100%;
`;

const App = () => {
  return (
    <AppRoot>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <AppProvider>
              <MoviesProvider>
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/error" component={Error} />
                  <Redirect from="/" to="/home" />
                </Switch>
              </MoviesProvider>
            </AppProvider>
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
    </AppRoot>
  );
};

export default App;
