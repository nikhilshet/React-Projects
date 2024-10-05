import React from 'react'
import './App.css';

export default function BgChanger() {
  const [color , setColor] = React.useState("#f1f1f1")

  const style = {
    backgroundColor : color
  }


  function handleClick(){
      let newColor = "#"
      const arr = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
      
      for(let i = 0 ; i< 6 ; i++){
        let randomnNumber = Math.ceil(Math.random() * 10);
        newColor = newColor + arr[randomnNumber];
      }
      console.log(newColor)

      setColor((prev)=>{
        return prev = newColor
      })
  }
  
  return (
    <div className='box'>
      <h1>random color generator</h1>
      <div className='innerBox'
           style={style}
      >
      </div>
      <p>the hexcode of this color is {color}</p>
      <div className='btnCon'>
      <button onClick={handleClick}>Using Hex</button>

      </div>
    </div>
  );
}


