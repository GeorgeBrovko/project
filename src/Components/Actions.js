
import React, { Component } from 'react'
import { ActItem } from './ActItem'
export class Actions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actions_good: [
        {
          id: 1,
          img_2: 'Group 279.png'
        },
        {
          id: 2,
          img_2: 'Group 280.png'
        },
        {
          id: 3,
          img_2: 'Group 281.png'
        },
        {
          id: 4,
          img_2: 'Group 282.png'
        },
        {
          id: 5,
          img_2: 'Group 283.png'
        },
        {
          id: 6,
          img_2: 'Group 284.png'
        },
        {
          id: 7,
          img_2: 'Group 285.png'
        },
        {
          id: 8,
          img_2: 'Group 286.png'
        },
        {
          id: 9,
          img_2: 'Group 287.png'
        },
      ]
    }
  }

  render() {
  
    return (
      <main>
        <div className='act'>
          {this.state.actions_good.map(el => (
              <ActItem key={el.id} item={el} />
         ))}
         </div>
      </main>
    )
  }
}

export default Actions