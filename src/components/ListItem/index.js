import React from 'react';
import './ListItem.css';

const ListItem = (props) => (
  <div className={`${props.className} list-item`}>
    { props.data ? 
      (<p className="list-item__data">{props.text} <b>{props.data}</b></p>) :
      (<p className="list-item__no-data">Nothing to show</p>)}
  </div>
);

export default ListItem;
