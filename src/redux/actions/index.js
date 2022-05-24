export const addCart = (book) => {
    return ({
        type: 'ADD_BOOK',
        payload: book
    })
}

export const deleteCart = (book) => {
    return ({
        type: 'DELETE_BOOK',
        payload: book
    })
}