import React from 'react';

const Detail = context => (
  <div>{context.split(',').map(item => <div>{item}</div>)}</div>
);

export default Detail;
