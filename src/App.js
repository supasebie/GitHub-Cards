import React from 'react';
import './scss/app.scss';
import { Grid, GridColumn, Container } from 'semantic-ui-react';
import CardComponent from './components/CardComponent.js';
import HeaderComponent from './components/HeaderComponent.js';

// function App({title}) {
//   return <div className="header">{title}</div>;
// }
class App extends React.Component {
  render() {
    return (
      <>
      <Container text>
        <HeaderComponent/>
      </Container>
      <Grid container columns={3}>
        <GridColumn>
          <CardComponent />
        </GridColumn>
        <GridColumn>
          <CardComponent />
        </GridColumn>
        <GridColumn>
          <CardComponent />
        </GridColumn>
      </Grid>
      </>
    )
  }
}


export default App;
