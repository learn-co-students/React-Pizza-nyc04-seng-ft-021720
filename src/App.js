import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    newEditPizza: {},
    topping: "",
    size: "",
    vegetarian: false
    
  }

  handleAllInputs = (evt) => {
    this.setState({
      [evt.target.name] : evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.addOnePizza(this.state)
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas") 
      .then(res => res.json())
      .then((arrayOfPizza) => {
        
        this.setState({
          pizzas: arrayOfPizza
        })
      })
  }


  addOnePizza = () => {
    let newPizza = {
      topping: this.state.topping,
      size: this.state.size,
      vegetarian: this.state.vegetarian
    }
    fetch("http://localhost:3000/pizzas", {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },

        body: JSON.stringify(newPizza)
    })

        .then(res => res.json())
        .then((addNewPizza) => {
          let newCopy = [...this.state.pizzas, addNewPizza]
            this.setState({
              pizzas: newCopy
            })
        })
  }
    receivePizza = (pizzaEdit) => {
      this.setState({
                    topping: pizzaEdit.topping,
                    size: pizzaEdit.size,
                    vegetarian: pizzaEdit.vegetarian
      })
  }

  render() {
    console.log(this.state.newEditPizza)
    return (
      <Fragment>
        <Header/>
        <PizzaForm
        addOnePizza={this.addOnePizza}
        receivePizza={this.receivePizza}
        handleAllInputs={this.handleAllInputs}
        topping={this.state.topping}
        size={this.state.size}
        vegetarian={this.state.vegetarian}

        />

        <PizzaList
        pizzas={this.state.pizzas}
        receivePizza={this.receivePizza}
        />
      </Fragment>
    );
  }
}

export default App;
