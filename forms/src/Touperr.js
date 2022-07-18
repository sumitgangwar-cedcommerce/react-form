import React, { Component } from 'react'
import { Button, TextField } from '@mui/material'
export class Touperr extends Component {

    handler = () => {
        let txt = document.getElementById('txt').value
        document.getElementById('txt').value =  txt.toUpperCase()
    }

  render() {
    return (
        <div className="main" style={{margin:'2vw', display: 'flex' , width:'50%' , marginLeft:'auto' , marginRight:'auto'}}>
            <TextField id='txt'  type='text' variant='standard' label='Enter text to change in upper'></TextField>
            <div style={{margin:'2vw'}}><Button onClick={this.handler} variant='contained'>To Upper</Button></div>
        </div>
    )
  }
}

export default Touperr