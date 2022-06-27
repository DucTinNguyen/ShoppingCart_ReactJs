import React, { Component } from "react";
import { connect } from "react-redux";
import {deleteCartAction } from "../redux/actions/ShoppingAction"
class Modal extends Component {
  renderProduct = () => {
    return this.props.listProduct.map((item, index) => {
      return (
        <tr key={index}>
          <th scope="row">{item.maSP}</th>
          <td>{item.tenSP}</td>
          <td>{item.giaBan.toLocaleString()}đ</td>
          <td>{item.soluong}</td>
          <td>
            <button className="btn btn-danger" onClick={()=>{this.props.deleteCart(item)}}>Xóa</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div>
          {/* Button trigger modal */}
          {/* <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Launch demo modal
          </button> */}
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content" style={{ width: "600px" }}>
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Danh sách sản phẩm
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table table-bordered text-center">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>

                      {this.renderProduct()};

                      
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listProduct: state.ShoppingReducer.listProduct,
  };
};
const mapDispatchToProps = (dispatch) =>{
  return {
    deleteCart: (item) =>{
      dispatch(deleteCartAction(item));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Modal);
