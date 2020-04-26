import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state ={
    orders: [],
    pizzaEdit: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(r=>r.json())
    .then(pizza => this.setState({orders: pizza}))
  }

  editClick = (pizza) =>{
    this.setState({
      pizzaEdit: pizza
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    let pizzaID = this.state.pizzaEdit.id
    console.log(this.state.pizzaEdit)

    fetch(`http://localhost:3000/pizzas/${pizzaID}`,{
      method: 'PATCH',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
        },
      body: JSON.stringify(this.state.pizzaEdit)
    })
    .then(r => r.json())
    .then(pizza => this.updateEditedPizza(pizza))
  }

  updateEditedPizza = (pizzaTest) =>{
    let currentPizza = this.state.orders.map(pizza =>{
      if(pizza.id === pizzaTest.id){
        return pizzaTest
      }
      else{
        return pizza
      }
    })

    this.setState({
      orders: currentPizza
    })

  }

  onChangeTopping = (event) =>{
    let oldPizzaEdit = {...this.state.pizzaEdit}
    oldPizzaEdit.topping = event.target.value
    this.setState({
      pizzaEdit: oldPizzaEdit
    })
    
  }

  onChangeSize = (event) =>{
    let oldPizzaEdit = {...this.state.pizzaEdit}
    oldPizzaEdit.size = event.target.value
    this.setState({
      pizzaEdit: oldPizzaEdit
    })
      }

  onChangeVegetarian = (event) =>{
    let oldPizzaEdit = {...this.state.pizzaEdit}
    
     if(event.target.value === "true"){
      oldPizzaEdit.vegetarian = true
     }
     else{
      oldPizzaEdit.vegetarian = false
     }

    this.setState({
      pizzaEdit: oldPizzaEdit
    },()=>{console.log(this.state)})
    
  }


  render() {
    return (
      <Fragment>
        <Header/>

        <PizzaForm pizza= {this.state.pizzaEdit} 
        submit ={this.handleSubmit} 
        changeTopping ={this.onChangeTopping}
        changeSize ={this.onChangeSize}
        changeVegetarian = {this.onChangeVegetarian}/>

        <PizzaList orders ={this.state.orders} click = {this.editClick} />
      </Fragment>
    );
  }
}

export default App;
