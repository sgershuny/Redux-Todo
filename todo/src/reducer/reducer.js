import { ADD_ITEM, COMPLETE } from "../actions/actions";



const initialState = {
  todos: [{value: "example", completed: false, id: 0},{value: "example2", completed: false, id: 1}],
  next_id: 2
  
}


const reducer = (state = initialState,action) => {

  switch(action.type){
    case ADD_ITEM:
      console.log("Item in reducer is ", action.payload)
      return{
        todos: state.todos.concat(action.payload),
        next_id: state.todos.length+1
      }
      default:
        return state;
    case COMPLETE:
      console.log("Item ", action.payload," is completed")
      console.log("filter function returns: ", state.todos.filter(item => item.id !== action.payload))
      return{
        todos: state.todos.filter(item => item.id !== action.payload),
        next_id: state.id
      }
  } 

}

export default reducer;