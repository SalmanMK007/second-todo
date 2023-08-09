

const Initial_State = {
    User_data: []
}

export const todoreducers = (state = Initial_State, action) => {
    switch (action.type) {

        
        // Add data action 
        case "ADD_DATA":
            return {
                ...state,
                User_data: [...state.User_data, action.payload]
            }

        // reomve data action 
        case "RMV_DATA":

            const dltdata = state.User_data.filter((e, k) => k !== action.payload)

            return {
                ...state,
                User_data: dltdata
            }

        // Update data action
        case "UPDATA_DATA":

            const updatadata = state.User_data.map((e, k) => k == action.d ? action.payload : e)

            return {
                ...state,
                User_data: updatadata
            }



        // Clear all Users data action
        case "CLEAR_USERS":

            return {
                ...state,
                User_data: [], // Clear the user list
            };






        default:
            return state;
    }
}

