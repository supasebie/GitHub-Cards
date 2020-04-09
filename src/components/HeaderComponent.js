import React from "react";
import { Header, Icon } from "semantic-ui-react";

class HeaderComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header as="h1" icon textAlign='center' color='yellow'>
          <Icon name="github" />
          GitHub Cards By Seb!
          <Header.Subheader>
            Populate a page with GitHub projects
          </Header.Subheader>
        </Header>
      </React.Fragment>
    );
  }
}

export default HeaderComponent;
