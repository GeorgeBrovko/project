import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Items from "./Items"
import Categories from "./Categories";


class Catalog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     currentItems: []
    }
    this.state.currentItems = this.props.items
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  
  render() { 
    return (
      <div className="wrapper">
        <Header orders={this.props.orders}/>
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.props.onShowItem} items={this.state.currentItems} onAdd={this.props.onAdd} />
        <div className="mask">
        <img src={"./img_3/Mask Group .png"} alt="My"/>
        </div>
        <div className="mask2">
        <img className="img" src={"./img_4/Mask Group (1).png" } alt="My"/>
        <div className="rectangle">
        <img src ={"./img_5/Rectangle 247.png"} alt="My"/>
        <h5 className="rect">Наш адрес:</h5>
        <h5 className="rect2">Наша почта:</h5>
        <h2 className="rect3">+7 (917) 510-57-59</h2>
        </div>
        </div>        
        <Footer />
      </div>
    )
  }

 
  chooseCategory(category) {
    this.setState({
      currentItems: this.props.items.filter(el => el.category === category)
    })
  }

}
export default Catalog;  
