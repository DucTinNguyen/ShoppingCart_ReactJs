const stateDefault = {
    number: 0,
    listProduct: []
};

const ShoppingReducer = ( (state = stateDefault, action)=>{
    switch(action.type)
    {
        case 'add_cart':
            //số lượng trong giỏ hàng tăng lên:
            state.number++;
            ///
            let newListProduct = [...state.listProduct];

            //Thêm phần tử vào mảng
            // 1. Kiểm tra phần tử đã có trong mảng chưa , chưa thì thêm , rồi thì tăng số lượng
            let index = newListProduct.findIndex(item => item.maSP === action.item.maSP);
            if(index !== -1)
            {
                action.item.soluong++;
            }
            else
            {
                newListProduct.push(action.item);
                action.item.soluong = 1;
            }
            state.listProduct = newListProduct;
            return {...state};
        case 'delete_cart':
            let DeleListProduct = [...state.listProduct];
            let objIndex = DeleListProduct.findIndex(item => item.maSP === action.item.maSP);
            //Kiểm tra xem số lượng là bao nhiêu: 1 thì xóa, > 1 giảm --
            if(DeleListProduct[objIndex].soluong >= 1)
            {
                DeleListProduct[objIndex].soluong --;
                state.number--;
            }
            if(DeleListProduct[objIndex].soluong < 1)
            {
                DeleListProduct.splice(objIndex,1);
            }
            console.log(state.number)
            state.listProduct = DeleListProduct;
            return {...state};
        default:
            return {...state};
    }
    return state;
})
export default ShoppingReducer;