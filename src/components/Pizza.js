import React from "react"

const Pizza = (props) => {
  let {topping, size, vegetarian} = props.pizza
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian? "Yes":"Nope"}</td>
      <td><button onClick={() => props.click(props.pizza)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
