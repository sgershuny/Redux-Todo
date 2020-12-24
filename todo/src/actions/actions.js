

export const ADD_ITEM = "ADD_ITEM";
export const COMPLETE = "COMPLETE";


export const addItem = (todo,next_id) =>{

    let newItem = {
        value: todo,
        completed: false,
        id: next_id
    }
    return{
        type: ADD_ITEM,
        payload: newItem
    }
}


export const complete = (next_id) => {
    
    return{
        type:COMPLETE,
        payload: next_id
    }
}

// export default addItem;