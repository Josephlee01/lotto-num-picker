import React from "react";
import shortid from "shortid";
import { useState } from "react";

const TW539 = () => {
  const [pickedNumber, setPickedNumber] = useState([]);
  
  const createNumbers = () => {
    
    let numbers = [];
    for (let i = 0; i < 5; i++) {
      let number = Math.floor(Math.random() * 39) + 1;
      if (numbers.indexOf(number) === -1) {
        numbers.push(number);
      } else {
        i--;
      }
    }
    numbers.sort((a, b) => a - b);
    setPickedNumber(numbers)
  }


  const handlePrintBtn = (e) => {
    e.preventDefault()
    createNumbers()
    
  };

  return (
    <div>
      <h1>TW539</h1>
      <button onClick={handlePrintBtn}>Print Random Numbers!</button>
      { (
        <ul>
          {pickedNumber.map((num) => {
            return <li key={shortid.generate()}>{num}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default TW539;
