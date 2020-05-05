const initialState = {
    // app
    shoppedItems: [], shoppingcartId: null,
    currentUser: null , searchTerm: "",
    sortChoice: '',
    //  items container 
    items: [],    
    // profil  
    users: [],  
    //shoppingCart     
    shoppingCartItems: [],  
    countShoppingCartitems: null ,  
    // watchlist  
    watchlistItems: [],  
    // profilCart 
    updateIsClicked: false, deleteIsClicked: false,
    username: '', password: '',email: '', phone: '',
    profileImage: '',  
    // sellItems  
    title: '',price: '',location: '', condition: '', 
    category: '',offer: '', imgUrl: '', 
    // showSingleitem 
    targetItem: {}, editItem: false, makeOffer: false,
    title: '', price: '', location: '',   
    condition: '',category: '', offer: false, imgUrl:''
    
}

export const fetchShopItemCreator = () => dispatch => {
    fetch('http://localhost:3000/api/v1/shopping_cart_items')
    .then(res => res.json())
    .then(shoppingCartItems => {
        dispatch({type: 'FETCH_SHOPITEM', payload: { shoppingCartItems }})
    })
}

function reducer (prevState=initialState, action){
    console.log('reducer shopItem number', prevState.shopItemNum)
    switch(action.type){
        case "":
            return (prevState.shoppingCartItems.length)
        case 'FETCH_SHOPITEM':
            return {...prevState, shoppingCartItems: action.payload.shoppingCartItems}

        // case "ADDITEMSHOPPINGCART":
        //     return {...prevState, shopItemNum: prevState.shoppingCartItems.length}
        case "CHECKOUT":
            return {...prevState, shopItemNum: []}
        
        default: 
            return prevState
        
    }
} 
export default reducer 
// console.log('reducer shoppingCartItems length ', prevState.shoppingCartItems.length.length)
// console.log('reducer shopItem number', prevState.shopItemNum)