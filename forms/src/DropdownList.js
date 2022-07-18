import React, { Component } from 'react'


export class DropdownList extends Component {
    state = {
        day:''
    }

    handleChange = () => {
        let day = document.getElementById('day').value;
        this.setState({day: day});
    }

  render() {
    return (
        <div className="main" style={{margin:'5vw' , display: 'flex' , width:'50%' , marginLeft:'auto' , marginRight:'auto' }}>
            <label for="day">Choose a day:</label>
            <select onChange={this.handleChange} id='day'>
                <option value="Monday">1</option>
                <option value="Tuesday">2</option>
                <option value="Wednesday">3</option>
                <option value="Thursday">4</option>
                <option value="Friday">5</option>
                <option value="Saturday">6</option>
                <option value="Sunday">7</option>
            </select>
            <div style={{margin:'2vw'}}>{this.state.day}</div>
        </div>
    
    )
  }
}

export default DropdownList