import React from 'react';

const RenderList = ({ location }) => {
  if (!location) {
    return (
      <div>Please enter a valid City, STATE</div>
    );
  }

  return(
    <div>
      YO!!!!
    </div>
  )
};

export default RenderList;
