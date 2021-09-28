import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import { deleteFromCart, increaseQtty, decreaseQtty, clearCart, renderClBtn } from '../../actions';

const CartTable = ({cart, deleteFromCart, decreaseQtty, increaseQtty, clearCart, renderClBtn}) => {
    
    return (
        <>
            
            <div className="cart__title">Your order:</div>
            <div className="cart__dltbtn" onClick={() => clearCart()} id='butt'>
                <button>
                Clear cart
                </button>
            </div>
            <div className="cart__list">
                {
                    cart.map(item => {
                        const {title, price, url, id, qtty} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div className="cart__item-qtty">
                                    <span className="smbtns" onClick={() => decreaseQtty(id) } >-</span>
                                    <span className="counter">x{qtty}</span>
                                    <span className="smbtns" onClick={ () => increaseQtty(id)}>+</span>
                                </div>
                                <div onClick={ () => deleteFromCart(id) } className="cart__close">&times;</div>
                            </div>
                        )   
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({cart}) => {
    return {
        cart
    }
};
const mapDispatchToProps = {
    deleteFromCart,
    decreaseQtty,
    increaseQtty,
    clearCart,
    renderClBtn
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);