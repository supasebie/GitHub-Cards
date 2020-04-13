import React from "react";
import "./scss/app.scss";
import { Grid, Container, Form, Button, Input } from "semantic-ui-react";
import HeaderComponent from "./components/HeaderComponent.js";
import NavComponent from "./components/NavComponent.js";
import CardListComponent from "./components/CardListComponent";
import Axios from "axios";

class FormComponent extends React.Component {
  state = {userName: ''}
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await
    Axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({userName:''});
  };
  render() {
    return (
      <Form size="large" onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Field>
            <label></label>
            <input
            type="text"
            placeholder="GitHub username"
            value = {this.state.userName}
            onChange={event => this.setState({ userName: event.target.value })}
            required
            />
          </Form.Field>
          <Button type='submit'>Add card</Button>
          </Form.Group>
      </Form>
    );
  }
}
class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  }

  render() {
    return (
      <>
        <NavComponent />
        <Container text>
          <HeaderComponent />
        </Container>
        <Grid container centered columns={1}>
          <Grid.Row>
            <FormComponent onSubmit={this.addNewProfile}/>
          </Grid.Row>
        </Grid>
        <Grid container columns={3}>
          <Grid.Row>
            <CardListComponent profiles={this.state.profiles} />
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default App;
