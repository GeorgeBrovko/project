import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: '1',
                    name: 'Холодные закуски'
                },
                {
                    key: '2',
                    name: 'Горячие закуски'
                },
                {
                    key: '3',
                    name: 'Мясные блюда'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
          {this.state.categories.map(el => (
              <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
          ))}
      </div>
    )
  }
}

export default Categories