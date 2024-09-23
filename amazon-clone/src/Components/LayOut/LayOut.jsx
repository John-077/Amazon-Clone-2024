import React from 'react'
import Header from '../../Components/Header/Header'
function LayOut({Children}) {
  return (
    <div>
      <Header />
      {Children}
    </div>
  );
}

export default LayOut
