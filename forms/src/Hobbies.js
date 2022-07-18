import { Button } from '@mui/material'
import React, { Component } from 'react'

export class Hobbies extends Component {
    state = {
        hobbie:[]
    }
    handler = () => {
        let arr = []
        console.log(document.getElementById('t').checked)
        if(document.getElementById('t').checked)    arr.push('Travelling')
        if(document.getElementById('l').checked) arr.push('Listening Music')
        if(document.getElementById('v').checked) arr.push('Video Games')
        this.setState({hobbie: arr})
    }
  render() {
      console.log(this.state.hobbie)
    return (
      <div className="main">
          <label><input id='t' type="checkbox" name="checkbox" value="value" />Travelling</label>
          <label><input id='l' type="checkbox" name="checkbox" value="value" />Listening Music</label>
          <label><input id='v' type="checkbox" name="checkbox" value="value" />Video Games</label>
          <div><Button onClick={this.handler} variant='contained'>Submit</Button></div>
          <div>
            {
                this.state.hobbie.map((ele , index) =>
                    <p key={index}>{ele}</p>
                )
            }
          </div>
      </div>
    )
  }
}

export default Hobbies