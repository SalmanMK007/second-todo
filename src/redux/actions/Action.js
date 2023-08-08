export const Add =(iteams)=>{
    return {
        type : "ADD_DATA",
        payload : iteams
    }
}



export const Remove =(id)=>{
    return {
        type : "RMV_DATA",
        payload : id
    }
}


export const Update_data =(iteams,id)=>{
    return {
        type : "UPDATA_DATA",
        payload : iteams,
        d : id
    }
}
