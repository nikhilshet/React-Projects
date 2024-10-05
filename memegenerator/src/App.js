import React from 'react';
import './App.css';
import Header from './memegen/header.js';
import Input from './memegen/input.js';
import ImageBox from './memegen/image.js';

function App() {

  const [formdData , setFormData] = React.useState({topText:"" , bottomText:""})

  const [text , setText] = React.useState({topText:"" , bottomText:"" , url:"/images/memetemp.png"})

  const [memeData , setMemeData] = React.useState([])

  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(data => data.json())
    .then(res => setMemeData(res.data.memes))
    
  } , [])

  function handleChange(event){
    setFormData((prev)=>{
      return{
        ...prev,
        [event.target.name] : event.target.value
      }
    })
  }

  
  function handleClick(){
    const imagesArr = memeData;
    const randomNum = Math.floor(Math.random() * 100) + 1;
    const urlImage = imagesArr[randomNum].url;
    console.log(urlImage)
    setText((prev)=>{
      return{
        ...prev,
        topText: formdData.topText,
        bottomText:formdData.bottomText,
        url:urlImage
      }
    })
  }

  return (
    <div className="outerBox">        
      <div className='innerBox'>
        <Header/>
        <Input
          onChange = {handleChange}
          topText = {formdData.topText}
          bottomText = {formdData.bottomText}
          onClick = {handleClick}
          />
        <ImageBox
          topText = {text.topText}
          bottomText = {text.bottomText}
          url = {text.url}
          />
      </div>
    </div>
  );
}

export default App;
