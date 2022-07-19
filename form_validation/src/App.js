import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [counter , setCounter] = useState(1);
  if(counter===0) {
    document.getElementById('res').innerHTML = "";
    setCounter(1);
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    if(counter===1)  document.getElementById('res').innerHTML = "<p style='color:blue'>Your data saved</p>";

  }
  const changeColor = () =>{
    document.getElementById('check').style.borderColor = 'black';
    document.getElementById('check').style.color = 'black';
  }

  const notValid = ()=>{
    setCounter(0);  
  }
 

  return (
    <div className="App">
      <form action='#' onSubmit={submitHandler}>
      <table><tbody>
        <tr>
          <td id='res' colSpan={2}></td>
        </tr>
        <tr>
          <td>Enter your Name</td>
          <td><input id='name' required type='text' onInvalid={notValid}></input></td>
        </tr>
        <tr>
          <td>Enter Your Email</td>
          <td><input id='email' required type='email'  onInvalid={notValid}></input></td>
        </tr>
        <tr>
          <td>Enter your Password</td>
          <td><input id='password' required type='password' onInvalid={notValid}></input></td>
        </tr>
        <tr>
          <td>Enter your Address</td>
          <td><textarea id='address' required onInvalid={notValid}></textarea></td>
        </tr>
        <tr>
          <td>Enter your Mobile Number</td>
          <td><input id="num" required type='tel' pattern='[0-9]{10}' onInvalid={notValid}></input></td>
        </tr>
        <tr>
          <td>Select Your Gender</td>
          <td>
            Male <input required type='radio' value='male' id='m' name='gender' onInvalid={notValid}></input>
            female <input required type='radio' value='female' id='f' name='gender' onInvalid={notValid}></input>
          </td>
        </tr>
        <tr>
          <td>Choose Your Hobbies</td>
          <td id='check'>
            Cricket <input id='c'  type='checkbox' onInvalid={notValid}></input>
            singing <input id='s' type='checkbox' onInvalid={notValid}></input>
            Dancing <input id='d' type='checkbox' onInvalid={notValid}></input>
          </td>
        </tr>
        <tr>
          <td>Choose your Profile pic</td>
          <td><input id='file' required  type='file' onInvalid={notValid}></input></td>
        </tr>
        <tr>
          <td>Select your DOB</td>
          <td><input id='date' required type='date' onInvalid={notValid}></input></td>
        </tr>
        <tr>
          <td colSpan={2} style={{textAlign:'center'}}>
            <button type='submit'>Register Me</button>
            <button type='reset'onClick={changeColor} >Reset</button>
          </td>
        </tr>
        </tbody></table>
      </form>
    </div>
  );
}

export default App;
