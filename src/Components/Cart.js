
    import React, { Component } from 'react'
    import CartItem from './Cart_item'
    import { Link } from 'react-router-dom'
    export class Cart extends Component {
      render() {
        var totalSum= this.props.orders.reduce((accum,item) => accum + Number(item.price), 0)
        return (
          
          <main>
            <h1 className='h1'>КОРЗИНА</h1>
            <h4 className='h4'>Итого: {totalSum} р</h4>
         
            <div className="add-in-cart" onClick={() => {return 0}}><Link style={{color: 'white'}} to='/order'>Оформить заказ</Link></div>
            <div className='cartItem'>
              {this.props.orders.map(el => (
                  <CartItem key={el.id} item={el} onDelete ={this.props.onDelete} />

             ))}
             </div>
             

          </main>
        )
      }
    }
    
    export default Cart