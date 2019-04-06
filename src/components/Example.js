import React from 'react';
import exampleCss from './Example.css';

const Example = () => {
  return (
    <div>
      Example 0406
      <div className={exampleCss.top0}>
      <div className={exampleCss.top1}>
        <img alt=""  src="../../public/imgs/right-top-mask.png" /> 
        </div >
        <div className={exampleCss.top2}>
        <img alt=""  src="../../public/imgs/right-top-100.png" />
        </div >
        
        </div>
    </div>
  );
};

Example.propTypes = {
};

export default Example;
