const initialState = {
    menu: [],
    loading: true,
    error: false,
    cart: [],
    total: 0
}

const reducer = (state = initialState, action) => {
    const id = action.id;  
    const itemInd = state.cart.findIndex(item => item.id === id);
    const item = state.menu.find(item => item.id === id);
    const itemInCart = state.cart.find(item => item.id === id);
     
    switch (action.type) {
        case 'MENU_LOADED':
            
            return {
                ...state,
                menu: action.payload,
                loading: false
            };

        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true
            };

        case 'MENU_ERROR':
            return {
                menu: [],
                loading: false,
                error: true
            };

        case 'ITEM_ADD_TO_CART': 
            

            if (itemInd >= 0){
                const newItem = {
                    ...itemInCart,
                    qtty: ++itemInCart.qtty
                }
                return {
                    ...state, 
                    cart: [
                        ...state.cart.slice(0, itemInd),
                        newItem,
                        ...state.cart.slice(itemInd + 1)
                    ],
                    total: state.total + newItem.price
                }
            } 
            // товара раньше не было в корзине
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                qtty: 1
            };
            return {
                ...state,
                cart: [
                    ...state.cart,
                    newItem
                ],
                total: state.total + newItem.price
            };
    
        case 'ITEM_DELETED_FROM_CART':
            const price = state.cart[itemInd]['price'] * state.cart[itemInd]['qtty'];
            return {
                ...state, 
                cart: [
                    ...state.cart.slice(0, itemInd),
                    ...state.cart.slice(itemInd + 1)
                ], 
                total: state.total - price
            };

        case 'INCREASE_QTTY':
            const incQttyItem = {
                ...itemInCart,
                qtty: ++itemInCart.qtty
            };
            return {
                ...state,
                cart: [
                    ...state.cart.slice(0, itemInd),
                    incQttyItem,
                    ...state.cart.slice(itemInd + 1)
                ],
                total: state.total + item.price
            };

        case 'DECREASE_QTTY':
            const decQttyItem = {
                ...itemInCart,
                qtty: --itemInCart.qtty
            };
            if(decQttyItem.qtty >= 1){
                return {
                    ...state,
                    cart: [
                        ...state.cart.slice(0, itemInd),
                        decQttyItem,
                        ...state.cart.slice(itemInd + 1)
                    ],
                    total: state.total - item.price
                };
            }
            return {
                ...state,
                cart: [
                    ...state.cart.slice(0, itemInd),
                    ...state.cart.slice(itemInd + 1)
                ],
                total: state.total - item.price
            }

        case 'CLEAR_CART':
            return {
                ...state,
                cart: [],
                total: 0
            };

        case 'RENDER_CLEAR_BUTTON':
            const butt = document.querySelector('.cart__dltbtn');         
            console.log(butt)
            if(state.cart !== []){
                butt.classList.add('hidden');
            }
            return {
                ...state
            };

        default:
            return state;
    }
}

export default reducer;