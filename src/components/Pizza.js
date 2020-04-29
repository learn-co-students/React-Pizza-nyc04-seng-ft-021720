import React from "react"

const Pizza = (props) => {
    let {topping, size, vegetarian } = props.pizza

    const handleClick = (evt) => {
      props.receivePizza(props.pizza)
    }
    

  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td><button 
          onClick={handleClick}
          type="button" 
          className="btn btn-primary">
            Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
