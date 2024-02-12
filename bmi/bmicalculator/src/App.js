
import './App.css';
import React,{useState} from 'react';


function App() {
// making a state of our application


  const [weight, setweight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setbmi] = useState('');
  const [Message, setMessage] = useState('');

// logic 
let calsbmi =(e)=>{
 e.preventDefault();
  if (weight===0|| height ===0){
    alert('pleace enter a valid weight and height')
  }
else {
  let bmi = (weight/( height*height)*703)
  setbmi(bmi.toFixed(1))

  // 
  if (bmi<25){
    setMessage('you are unfer weight')
  }

  else if (bmi>= 25 && bmi <30){
    setMessage(' you are helthy weight')
  }
  else {
    setMessage('you are overweight')
  }
}
}


// reload 

let reload = ()=>{
window.location.reload()
}


  return (
    <div className="App">
 <div className='contianer'>
  <h2>BMI CALCULATOR</h2>
  <form onSubmit={calsbmi}>
    <div>
      <label>Weight (ibs)</label>
      <input type='text' placeholder='Enter Weight value' value={weight
      }onChange={(e)=>setweight(e.target.value)} />
    </div>
    <div>
      <label>Height (in)</label>
      <input type='text' placeholder='Enter Height value' value={height
      } onChange={(e)=>setHeight(e.target.value)}/>
    </div>
    <div>
      <button className='btn' type='submit'>Submit</button>
      <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
    </div>
    <div className='center'>
      <h3>Your Bmi is:{bmi}</h3>
      <p>{Message}</p>
    </div>
  </form>
 </div>


    </div>
  );
}

export default App;
