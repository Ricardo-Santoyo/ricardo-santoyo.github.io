import React from 'react';
import { ReactComponent as CheckIcon } from '../icons/check.svg';

function Success() {
  return (
    <div id="success">
      <h1>Your message was successfully sent!</h1>
      <h2>Thank You!</h2>
      <CheckIcon />
    </div>
  );
}

export default Success;