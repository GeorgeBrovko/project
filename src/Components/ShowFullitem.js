import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <>
      <div className='full-item'>
        <img src={"./img/" + this.props.items[0].img} alt="My" />
        <h2>{this.props.items[0].title}</h2>
        <h3>Вес: {this.props.items[0].Ves} г</h3>
        <p>{this.props.items[0].desc}</p>
        <b>{this.props.items[0].price}р </b>
        <p className='Bel'>Белки</p>
        <p className='Jir'>Жиры</p>
        <p className='Ugl'>Углеводы</p>
        <p className='Kl'>Ккал</p>
      </div> 
      </>
    )
  }
}

export default ShowFullItem