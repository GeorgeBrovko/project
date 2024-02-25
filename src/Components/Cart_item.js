import React, { Component } from 'react'

export class CartItem extends Component {
    render() {
        console.log(this.props.item)
        return (
            <div className='item'>
                <img src={"./img/" + this.props.item.img} alt="My" />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}р </b>
                <button className='but' onClick ={() => {this.props.onDelete(this.props.item.id)} }>x</button>
            </div>
        )
    }
}

export default CartItem