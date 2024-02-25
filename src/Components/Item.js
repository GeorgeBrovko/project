import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Item extends Component {
    render() {
        return (
            <>          
            <div className='item'>
                <img src={"./img/" + this.props.item.img} alt="My" />
                <h2>{this.props.item.title}</h2>
                <h3>Вес: {this.props.item.Ves} г</h3>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}р </b>
                <div className='info'><Link style={{color: 'white'}} to='/info'>Полная информация</Link></div>
                <div className="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}>В корзину</div>
            </div>
            </>            

        )
    }
}

export default Item