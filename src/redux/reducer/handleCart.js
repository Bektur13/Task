const initialState = [];

const handleCart = (state = initialState, action) => {
    const book = action.payload;
    state.push(book);
    switch (action.type) {
        case 'ADD_CART':
            const exist = state.find((x => x.id === book.id));
            if (exist) {
                return state.map((x) => 
                    x.id === book.id ? {...x, gty: x.gty + 1} : x
                )
            } else {
                const book = action.payload
                return[
                    ...state,
                    {
                        ...book,
                        gty: 1
                    }
                ]
            }
            break;

        case 'DELETE_CART': {
            const exist1 = state.find((x) => x.id === book.id);
            if (exist1.gty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) => 
                    x.id === book.id ? {...x, gty: x.gty - 1} : x
                )
            }
            break
        }

        default:
            return state;
    }
}

export default handleCart;

// articles.map(article => (
//     <li key={article.id}><Article article={article} /></li>
//     ));

// articles.map(article=>{
//     <li key={article.id}><Article article={article} /></li>
// })