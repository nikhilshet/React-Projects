
import './App.css';
import React from 'react'

function App() {
  const [formData , setFormData] = React.useState(
    {
      firstName:"" ,
      comments:"" ,
      isChecked:false ,
      gender:"",
      favColor:""
    }
    )
  
  console.log(formData)
  
  function handleChange(event){
    console.log(event);
    const {name , value , type , checked} = event.target;
    setFormData((prev)=>{
      return {
        ...prev,
        [name] : type === "checkbox" ? checked : value
    }
  }
    )
  }
  
  function resetBtn(){
    setFormData({
      firstName:"" ,
      comments:"" ,
      isChecked:true ,
      gender:"",
      favColor:""
    }) 

  }
  return (
    <div>
      <input
        type='text'
        placeholder='name'
        onChange={handleChange}
        name='firstName'
        value={formData.firstName}
      /><br/>

      <textarea
        onChange={handleChange}
        name='comments'
        value={formData.comments}
      /><br/>

      <input
        id='checkbox'
        type='checkbox'
        onChange={handleChange}
        checked={formData.isChecked}
        name='isChecked'
      />
      <label htmlFor='checkbox'>Are you 18+</label><br/>

      <fieldset>
        <legend>Gender</legend>
          <input 
            type='radio'
            id='male'
            name='gender'
            onChange={handleChange}
            value="male"
            checked = {formData.gender === "male"}
          />
            <label htmlFor='male'>male</label><br/>
          <input 
            type='radio'
            id='female'
            name='gender'
            onChange={handleChange}
            value="female"
            checked = {formData.gender === "female"}
          />
          <label htmlFor='female'>Female</label>


      </fieldset>
      
          <select id='favColor'
            value={formData.favColor}
            onChange={handleChange}
            name='favColor'
          >
            <option value="">Choose </option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="white">White</option>
            <option value="black">Black</option>
          </select>
      <p> Your name is {formData.firstName}</p>
      <p> your comment is {formData.comments}</p>
      <p> your gender is{formData.gender}</p>
      <p>Your favColor is {formData.favColor}</p>
      <button onClick={resetBtn}>Click</button>
    </div>

    
  );
}

export default App;
