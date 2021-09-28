const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}
const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}
const menuError = () => {
    return {
        type: 'MENU_ERROR'
    }
}
const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        id: id
    };
}
const deleteFromCart = (id) => {
    return {
        type: 'ITEM_DELETED_FROM_CART',
        id: id
    };
}
const decreaseQtty = (id) =>{
    return {
        type: 'DECREASE_QTTY',
        id: id
    }
}
const increaseQtty = (id) =>{
    return {
        type: 'INCREASE_QTTY',
        id: id
    }
}
const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
};
const renderClBtn = () => {
    return {
        type: 'RENDER_CLEAR_BUTTON'
    }
};


export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFromCart,
    decreaseQtty,
    increaseQtty,
    clearCart,
    renderClBtn
};