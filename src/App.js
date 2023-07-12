import React from "react";
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Items from "./Components/Items"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          Ves: 640,
          title: 'Ягненок',
          img: 'Yagn.png',
          category: 'food',
          desc: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
          price: '620'
        },
        {
          id: 2,
          Ves: 640,
          title: 'Индейка',
          img: 'Ind.png',
          category: 'food',
          desc: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
          price: '450'
        },
        {
          id: 3,
          Ves: 640,
          title: 'Гусь',
          img: 'Goose.png',
          category: 'food',
          desc: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
          price: '7900'
        },
        {
          id: 4,
          Ves: 640,
          title: 'Утка',
          img: 'Duck.png',
          category: 'food',
          desc: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
          price: '3230'
        }
          
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }

  addToOrder(item) {
    this.setState({ orders: [...this.state.orders, item] })
  }

}

export default App;
