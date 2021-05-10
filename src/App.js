import React from 'react';
import NavBar from './components/NavBar';
// import MyAccount from './components/MyAccount';
import {ThemeProvider} from '@material-ui/styles';
import theme from './theme/Theme';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Content from './components/Content';

function App() {
  return (
    <React.Fragment>
      <CssBaseLine />
      <ThemeProvider theme={theme}>
          <NavBar />
          <Content />
      </ThemeProvider>
       
    </React.Fragment>
  );
}

export default App;
