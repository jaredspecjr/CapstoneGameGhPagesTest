import React from 'react';



function NoneTxt(props){
  return (
    <div>
      <div className="container">
        <p>You search the pile but, nothing seems to be here...</p>
        <button onClick={props.noItemsFound}>Next</button>
      </div>
      <style jsx>{`
        .container {
          background-color: #a0a0a0;
          border: 5px groove #c1c1c1;
        }
    `}</style>
    </div>
  );
}

export default NoneTxt;
