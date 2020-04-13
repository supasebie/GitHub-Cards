import React from 'react';
import CardComponent from './CardComponent.js'

const CardListComponent = (props) => (
    <React.Fragment>
      {props.profiles.map(profile => <CardComponent key={profile.id} {...profile}/>)}
    </React.Fragment>
  );

  export default CardListComponent;