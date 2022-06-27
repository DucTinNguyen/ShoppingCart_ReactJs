import React, { Component } from "react";
import {connect} from 'react-redux';
class HeaderComponent extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#FF9C00",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>Sản Phẩm Điện Thoại</h3>
          <p style={{ margin: 0, cursor:'pointer'}} data-toggle="modal" data-target="#exampleModal">
            <i className="fa fa-cart-arrow-down"></i>Giỏ Hàng <span>({this.props.countNumber})</span>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        countNumber: state.ShoppingReducer.number,
    }
}

export default connect(mapStateToProps)(HeaderComponent);
