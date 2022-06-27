import React, { Component } from "react";
import {connect} from "react-redux";
import {addCartAction} from '../redux/actions/ShoppingAction'
class ProductComponent extends Component {
  state = {
    phone: {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/vsphone.jpg"
    }
  };
  displayDetail = (newPhone) => {
        this.setState({
            phone:newPhone
        })
  }
  renderPhone = () => {
    return this.props.data.map((item, index) => {
      return (
        <div
          className="col-4"
          key={index}
          style={{ margin: "5px 0", cursor: "pointer" }} onClick={()=>{this.displayDetail(item)}}
        >
          <div className="card" style={{ height: "25rem" }}>
            <img
              src={item.hinhAnh}
              style={{ width: "100%", maxHeight: "100%" }}
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">{item.tenSP}</h5>
              <h5>{item.giaBan.toLocaleString()}đ</h5>
              <button className="btn btn-primary" onClick={()=>{this.props.addCart(item)}}>
                Thêm giỏ hàng
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {/* Danh sach san pham */}
          <div className="col-8">
            <div className="row">{this.renderPhone()};</div>
          </div>
          {/* Thong tin chi tiet */}
          <div className="col-4">
            <h2>Thông tin chi tiết</h2>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Điện thoại</td>
                  <td>{this.state.phone.tenSP}</td>
                </tr>
                <tr>
                  <td>Màn hình</td>
                  <td>{this.state.phone.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{this.state.phone.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{this.state.phone.cameraSau}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{this.state.phone.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Ram</td>
                  <td>{this.state.phone.ram}</td>
                </tr>
                <tr>
                  <td>Rom</td>
                  <td>{this.state.phone.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addCart: (item)=>{
            dispatch(addCartAction(item))
        }
    }
}
export default connect(null,mapDispatchToProps)(ProductComponent);
