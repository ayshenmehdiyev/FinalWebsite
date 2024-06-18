export function addToFavListAction (payload) {
    return {
        type: 'ADD_TO_FAVLIST',
        payload,
    }
}

export function removeFromFavListAction(payload){
    return {
        type: 'REMOVE_FROM_FAVLIST',
        payload,
    }
}