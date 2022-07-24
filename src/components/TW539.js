import React from "react";
import shortid from "shortid";

const TW539 = () => {
  let lottoNumbers = [];
  for (let i = 0; i < 5; i++) {
    const parsedNumber = parseInt(Math.random()* 45 +1)
    if (lottoNumbers.indexOf(parsedNumber) === -1) {
      
      lottoNumbers.push(parsedNumber);
    }
    
  }
  lottoNumbers.sort((a,b) => a-b)

  return (
    <div>
      <h1>TW539</h1>
      <ul>
        {lottoNumbers.map(num => {
          return (
            <li key={shortid.generate()}>{num}</li>
        )
      })}  
</ul>
      
    </div>
  );
};

export default TW539;
