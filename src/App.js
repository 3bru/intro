import React, { Component } from "react";
import Navi from "./Navi.js";
import Category from "./Category.js";
import ProductList from "./ProductList.js";
import { Container, Row, Col } from "reactstrap";


export default class App extends Component{

  state = {currentCategory:" "}

  changeCategory = category => {
      this.setState({currentCategory: category.categoryName})

  }
  render(){
      let categoriyInfo = {title : "Category"}
      let productInfo = {title : "Product"}
      return(
          <div>
            <Container>
              <Row>
               <Navi />
              </Row>
              <Row>
               <Col xs="3">
                  <Category currentCategory = {this.state.currentCategory} changeCategory = {this.changeCategory} Info = {categoriyInfo} />
                </Col>
              <Col xs="9">
                  <ProductList info = {productInfo} />
              </Col>
              </Row>
            </Container>
    </div>

      )};
}
