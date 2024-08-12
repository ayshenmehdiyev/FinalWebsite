export const addToFavListAction = (payload) => {
    return {
        type: "ADD_TO_FAVLIST",
        payload,
    }
}

export const removeFromFavListAction = (payload)=>{
    return {
        type: 'REMOVE_FROM_FAVLIST',
        payload,
    }
}