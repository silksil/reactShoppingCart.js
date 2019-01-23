import React, { Component } from 'react';
import './App.css';
import CartItem from './components/CartItem';
import products from './data';

class App extends Component {
  state = {
    products: this.setData(products),
    total: 0,
  };

  setData (products) {
    return products.reduce((acc, item) => {
      return [...acc, {...item, quantity: 0 }];
    }, []);
  }

  incrementQuantity = (id) => {
    const newState = this.state.products.map(product => {
      if(product.id === id) {
        product.quantity ++;
      }
      return product;
    })
    this.setState({
      products: newState
    })
  }

  calculateTotal = () => {
    const newTotal = this.state.products.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    this.setState({
      total: newTotal
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.products.map(product=> {
          return (
            <div key={product.id}>
               <CartItem
                clicks={product.quantity}
                id={product.id}
                name={product.name}
                price={product.price}
                onPlusClick={this.incrementQuantity}
               />
            </div>
          )
        })}
        <button onClick={this.calculateTotal}> Calculate</button>
        <div> Total {this.state.total} </div>
      </div>
    );
  }
}

export default App;
