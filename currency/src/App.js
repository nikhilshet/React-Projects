
import React from 'react';
import Input from './components/input';
import useCurrencyInfo from './hooks/currencyinfo';

function App() {

  const [inpData , setInpData] = React.useState({fromAmount:0 , from:"usd" , to:"inr" , toAmount:0})
  const {fromAmount , toAmount , from , to} = inpData

  // const [convertedAm , setConvertedAmount] = React.useState(0)
  
  const apiData = useCurrencyInfo(from)

  const arr = Object.keys(apiData)

  const arrOfData = arr.map((ele , index)=>{
    return <option key={index}>{ele}</option>
  })
  
  console.log(apiData[to])


  function handleChange(e){
      setInpData((prev)=>{
          return{
            ...prev,
            [e.target.name] : e.target.value
          }
      })
  }

  function convert(){
      let con = fromAmount * apiData[to];
      setInpData((prev)=>{
        return{
          ...prev,
          toAmount : con
        }
      })
  }

  function swap(){
      setInpData((prev)=>{
        return{
          fromAmount : toAmount,
          from : to,
          toAmount : fromAmount,
          to: from
        }
      })
  }
  return (

    <div className='flex flex-col w-full h-screen justify-center items-center '>
      <Input
        className="mb-5"
        label = "from"
        amount = {fromAmount}
        inpChange = {handleChange}
        options = {arrOfData}
        boxNames = "fromAmount"
        default = {from}
        />

      <Input
        className="mb-5"
        label = "to"
        amount = {toAmount}
        options = {arrOfData}
        inpChange = {handleChange}
        default = {to}
        boxNames = "toAmount"
        />

        <button className='bg-white p-2 rounded-lg'
                onClick={convert}> 
          Convert
        </button>
       <button className='bg-white p-2 rounded-lg' onClick={swap}>Swap</button>
    </div>
);
}

export default App;
