import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import ProductComponent from './ProductComponent';
import Data from '../Data/Phone.json'
import Modal from './Modal';
class Shopping extends Component {
    render() {
        return (
            <div>
                <Modal />
                <HeaderComponent />
                <ProductComponent data={Data}/>
            </div>
        );
    }
}

export default Shopping;