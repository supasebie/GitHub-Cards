import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class CardComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <Image src="./images/Sebie.png" />
          <Card.Content>
            <Card.Meta>
              <span className="date">Joined June 2020</span>
            </Card.Meta>
            <Card.Description>
              Sebie is a Web Developer living in Las Vegas, Nevada!
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              9001 Over nine thousand friends!
            </a>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}
export default CardComponent;
