export default(state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions : state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions : [...state.transactions , action.payload]
            }
        case 'UPDATE_TRANSACTION':
            return{
                ...state,
                transactions : state.transactions.map((ele) => ele.id === action.payload.id ? {...ele, ...action.payload} : ele)
            }
        default:
            return state;
    }
}