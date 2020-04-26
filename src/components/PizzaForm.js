import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={
                props.pizza.topping
              }
              onChange={props.changeTopping}
              />
        </div>
        <div className="col">
          <select value={props.pizza.size} onChange={props.changeSize} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="true" checked={props.pizza.vegetarian} onChange={props.changeVegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="false" onChange={props.changeVegetarian} checked={props.pizza.vegetarian===false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.submit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
