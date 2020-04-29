import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
      let arrayOfComponent = this.props.pizzas.map((singlePizza) => {
        return <Pizza 
        key={singlePizza.id} 
        pizza={singlePizza}
        receivePizza={this.props.receivePizza}
        />
      })

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          
            { arrayOfComponent }
          
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
