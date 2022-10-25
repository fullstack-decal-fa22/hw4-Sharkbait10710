import React from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color handleClick={props.post} color="blue"/>
          <Color handleClick={props.post} color="green"/>
          <Color handleClick={props.post} color="yellow"/>
          <Color handleClick={props.post} color="red"/>
      </div>
    );
}
export default Menu;