import CartActionTypes from './cart.types'


const INITIAL_STATE = {
    hidden : true // dropdown should be invisible as the user should not see when they visit the site
}

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN: 
        return {
            ...state,
            hidden : !state.hidden //no payload 
        }
        default:
            return state
    }
}

export default cartReducer;