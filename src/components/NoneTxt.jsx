import React from 'react';



function NoneTxt(props){
  return (
    <div>
      <div className="container">
        <p>You search but, nothing of use seems to be there...</p>
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
