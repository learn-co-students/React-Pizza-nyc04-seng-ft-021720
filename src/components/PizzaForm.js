import React, { Component } from 'react';

class PizzaForm extends Component {

    // state = {
    //   topping: "",
    //   size: "",
    //   vegetarian: false
    // }

    //  handleAllInputs = (evt) => {
    //   this.setState({
    //     [evt.target.name] : evt.target.value
    //   })
    // }

    // handleSubmit = (evt) => {
    //   evt.preventDefault()
    //   this.props.addOnePizza(this.state)
    // }

  render() {
    return(
      <div className="form-row">
        <div className="col-5">
            <input 
              type="text" 
              name = "topping"
              className="form-control" 
              placeholder="Pizza Topping" 
              value={this.props.topping}
              onChange={this.props.handleAllInputs}
              />
        </div>
        <div className="col">
          <select 
          name = "size"
          value={this.props.size} 
          className="form-control"
          name= "size"
          onChange={this.props.handleAllInputs}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input 
            name = "vegetarian"
            onChange={this.props.handleAllInputs}
            className="form-check-input" 
            type="radio" 
            value={this.props.vegetarian} 
            checked={this.props.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input 
            name = "vegetarian"
            onChange={this.props.handleAllInputs}
            className="form-check-input" 
            type="radio" 
            value={this.props.vegetarian} 
            name= "vegetarian"
            checked={!this.props.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.props.addOnePizza}>Submit</button>
        </div>
      </div>

  )
}

  }
  

export default PizzaForm
