// Add data action 
export const Add = (iteams) => {
    return {
        type: "ADD_DATA",
        payload: iteams
    }
}


// reomve data action 
export const Remove = (id) => {
    return {
        type: "RMV_DATA",
        payload: id
    }
}

// Update data action
export const Update_data = (iteams, id) => {
    return {
        type: "UPDATA_DATA",
        payload: iteams,
        d: id
    }
}

// Clear all Users data action
export const Clear_Users = (iteams, id) => {
    return {
        type: "CLEAR_USERS",
        // payload : iteams,
    }
}
