import { Button, TextField } from '@mui/material'
import React, { Component } from 'react'

export class Form extends Component {
    state = {
        theme:[]
    }
    chageTheme = (e) => {
        e.preventDefault();
        let d = e.target.value
        if(d==='d') this.setState({theme:['black','white']})
        else this.setState({theme:['white','black']}) 
    }
  render() {
    return (
      <div className="main" style={{backgroundColor:this.state.theme[0] , color:this.state.theme[1] , margin:'5vw' ,width:'50%' , marginLeft:'auto' , marginRight:'auto'}}>

          <table>
              <tr>
                  <td><button style={{backgroundColor:this.state.theme[0] , color:this.state.theme[1]}} value="d" onClick={this.chageTheme}>Dark</button></td>
                  <td><button style={{backgroundColor:this.state.theme[0] , color:this.state.theme[1]}} value='l' onClick={this.chageTheme}>Light</button></td>
              </tr>
              
              <tr>
                   <td>Name:</td><td><input type="text" placeholder="Enter your name"></input></td>    
              </tr>
              <tr>
                    <td>Email:</td><td><input type='text' placeholder="Enter your Email"></input></td>   
              </tr>
              <tr>
                    <td>Password:</td><td><input type='password' placeholder="Enter your password"></input></td> 
              </tr>
                
              
              
              <button style={{backgroundColor:this.state.theme[0] , color:this.state.theme[1]}} variant="contained" type="submit">Submit</button>
          </table>

      </div>
    )
  }
}

export default Form