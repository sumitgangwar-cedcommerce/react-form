import { Button, TextField } from '@mui/material'
import React, { Component } from 'react'

export class Onlynum extends Component {
    state = {
        num: null,
    }
    handeler = () => { 
        let num = document.getElementById('num').value
        this.setState({num: num})
    }
  render() {
    return (
      <div className="main" style={{margin:'5vw' , display: 'flex' , width:'50%' , marginLeft:'auto' , marginRight:'auto'}}>
          <TextField id='num' onChange={this.handeler} type='number' variant='standard' label='Only num'></TextField>
          <div style={{margin:'2vw'}}><Button variant='contained'>{this.state.num}</Button></div>
      </div>
    )
  }
}

export default Onlynum