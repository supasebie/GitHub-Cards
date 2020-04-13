import React from "react";
import { Card, Icon, Image, Grid } from "semantic-ui-react";

class CardComponent extends React.Component {
  render() {
    const profile = this.props;
    return (
      <Grid.Column>
        <Card>
          <Image src={profile.avatar_url} />
          <Card.Content>
            <Card.Header>{profile.name}</Card.Header>
            <Card.Meta>
              <span className="date">
                {profile.url}
              </span>
            </Card.Meta>
            <Card.Description>{profile.company}</Card.Description>
          </Card.Content>
          <Card.Content extra>
              <Icon name="user" />
              {profile.followers}
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}
export default CardComponent;
