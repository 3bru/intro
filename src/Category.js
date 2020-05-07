import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {
  
    state = {
        categories: [
          { categoryId: 1, categoryName: "vegatables"},
          { categoryId: 2, categoryName: "fruit"}
        ]
      
  };

  render() {
    console.log(this.props.Info)
    return (
      <div>
        <h2>{this.props.Info.title}</h2>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem 
                onClick = {() => this.props.changeCategory(category)} 
                     key={category.categoryId}> 
                    {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
          <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
