export const initialState={   
     basket:[],
     user:null
}

const reducer=(state,action)=>{
console.log("type",action)
    switch(action.type){
case 'ADD_TO_BASKET':
     return {
           ...state,basket:[...state.basket,action.item]
     }
    case 'REMOVE_FROM_BASKET':
        var index=state.basket.findIndex((basketItem)=>basketItem.id==action.id)
        var newBasket=[...state.basket];
        if(index>=0)
        {
newBasket.splice(index,1)
        }
        else{
            console.warn("not found to remove")
        }
        return{
            ...state,basket:newBasket
        }
        case "SET_USER":
            return{
               ...state,user:action.user
            }

 
    }


}
export default reducer;