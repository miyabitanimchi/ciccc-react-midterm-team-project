import React from 'react';

const Detail = (props) => {
  return (
    <>
      <div>This is Detail component.</div>
      <div>Product Id : {props.match.params.id}</div>
    </>
  );
}

export default Detail;
