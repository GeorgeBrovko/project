import React, { Component } from 'react'

export class ActItem extends Component {
    render() {

        return (
            <div className='item'>
               <img src={"./img_2/" + this.props.item.img_2} alt="My" />
            </div>
        )
    }
}

export default ActItem