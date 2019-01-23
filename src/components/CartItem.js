import React from 'react';
import PropTypes from 'prop-types';

export default function CartItem( { id, name, price, clicks, onPlusClick }) {
  return (
    <React.Fragment>
      <li key={id}>
        {name}: {price} euro & {clicks} clicks
        <button
          onClick={()=> onPlusClick(id)}
          >
          increment
        </button>
      </li>
    </React.Fragment>
  )
};

CartItem.propTypes = {
  id : PropTypes.number,
  name : PropTypes.string,
  price : PropTypes.number,
  clicks : PropTypes.number,
  onPlusClick : PropTypes.func,
};