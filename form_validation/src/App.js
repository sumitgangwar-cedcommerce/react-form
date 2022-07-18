import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [counter , setCounter] = useState(1);
  if(counter===0) {
    document.getElementById('res').innerHTML = "";
    setCounter(1);
  }
  const submitHandler = () =>{
    // e.preventDefault();
    // let temp =1;
    // if(document.getElementById('s').checked)  temp = 0;
    // if(document.getElementById('d').checked)  temp = 0;
    // if(document.getElementById('c').checked)  temp = 0;

    // if(temp){
    //   document.getElementById('check').style.borderColor = 'red';
    //   document.getElementById('check').style.color = 'red';
    // }  
    // else{
    //   document.getElementById('check').style.borderColor = 'black';
    //   document.getElementById('check').style.color = 'black';
    // }

    // let name = document.getElementById('name').value;
    // let email = document.getElementById('email').value;
    // let password = document.getElementById('password').value;
    // let address = document.getElementById('address').value;
    // let num = document.getElementById('num').value;
    // let gender = '';
    // if(document.getElementById('m').checked)  gender = 'male';
    // if(document.getElementById('f').checked)  gender = 'female';
    // let file = document.getElementById('file').value;
    // let date = document.getElementById('date').value;
    // let temp2 = 1;
    // if(
    //     name === "" ||
    //     email ==="" ||
    //     password ==="" ||
    //     address ==="" ||
    //     num ==="" ||
    //     gender ==="" ||
    //     file === "" ||
    //     date === "" 
    //   ) temp2 = 0;
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
      <form action='#'>
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
            <button type='submit' onClick={submitHandler}>Register Me</button>
            <button type='reset'onClick={changeColor} >Reset</button>
          </td>
        </tr>
        </tbody></table>
      </form>
    </div>
  );
}

export default App;
