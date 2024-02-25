import React from "react";
import { Route, Routes } from 'react-router-dom'
import Cart from './Components/Cart'
import Catalog from "./Components/Catalog"
import ShowFullItem from "./Components/ShowFullitem";
import Actions from "./Components/Actions";
import Order from "./Components/Order";

// import { useNavigate } from "react-router-dom";

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
            category: '3',
            desc: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            price: '620'
          },
          {
            id: 2,
            Ves: 640,
            title: 'Индейка',
            img: 'Ind.png',
            category: '1',
            desc: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            price: '450'
          },
          {
            id: 3,
            Ves: 640,
            title: 'Гусь',
            img: 'Goose.png',
            category: '2',
            desc: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            price: '7900'
          },
          {
            id: 4,
            Ves: 640,
            title: 'Утка',
            img: 'Duck.png',
            category: '1',
            desc: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            price: '3230'
          },
          {
            id: 5,
            Ves: 640,
            title: 'Гусь',
            img: 'Goose.png',
            category: '3',
            desc: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            price: '7900'
          },
          {
            id: 6,
            Ves: 640,
            title: 'Утка',
            img: 'Duck.png',
            category: '2',
            desc: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            price: '3230'
          },
          {
            id: 7,
            Ves: 640,
            title: 'Ягненок',
            img: 'Yagn.png',
            category: '2',
            desc: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            price: '620'
          },
          {
            id: 8,
            Ves: 640,
            title: 'Индейка',
            img: 'Ind.png',
            category: '3',
            desc: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            price: '450'
          },
          {
            id: 9,
            Ves: 640,
            title: 'Ягненок',
            img: 'Yagn.png',
            category: '1',
            desc: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            price: '620'
          },
          {
            id: 10,
            Ves: 640,
            title: 'Индейка',
            img: 'Ind.png',
            category: '2',
            desc: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            price: '450'
          },
          {
            id: 11,
            Ves: 640,
            title: 'Гусь',
            img: 'Goose.png',
            category: '3',
            desc: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            price: '7900'
          },
          {
            id: 12,
            Ves: 640,
            title: 'Утка',
            img: 'Duck.png',
            category: '1',
            desc: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            price: '3230'
          },
        ],
        showFullItem: false,
        fullItem: {}
      }
      
      this.addToOrder = this.addToOrder.bind(this)
      this.deleteFromOrder = this.deleteFromOrder.bind(this)
      this.onShowItem = this.onShowItem.bind(this)
    }
    render() {
    return (

        <Routes >
          <Route path="/" element = { <Catalog items = {this.state.items} orders={this.state.orders} 
                                  currentItems={this.state.currentItems} onAdd={this.addToOrder} 
                                  onShowItem={this.onShowItem }/> } />
          <Route path='/cart' element={<Cart orders={this.state.orders} onDelete={this.deleteFromOrder} />} />
          <Route path='/info' element={<ShowFullItem items= {this.state.items} onShowItem={this.onShowItem }/>} />
          <Route path='/act' element={<Actions />} />
          <Route path='/order' element={<Order />} />
        </Routes>
    
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    console.log(item)
    // let navigate = useNavigate();
    // navigate('/info')
  }
  addToOrder(item) {
    this.setState({ orders: [...this.state.orders, item] })
  }
  deleteFromOrder(id) {
    this.setState({ orders: this.state.orders.filter(obj => obj.id !== id)})
  }
}

export default App;




