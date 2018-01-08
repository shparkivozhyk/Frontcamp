import NewsBlock from "../components/NewsBlock.js"
const handler = new NewsBlock();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DISPLAY_NEWS':
            return Object.assign(state, action.newState);
        case 'DISPLAY_ERROR':
            handler.displayError(action.error);
            return {};
        case 'default':
                return state;
    }
}

const getNews = (dispatch, state) => {
    const link = handler.link;
    if (state[link.selectedChannel]) {
        let newState = {
            news: state[link.selectedChannel]
        }
        dispatch({
            type: 'DISPLAY_NEWS',
            newState
        });
    }
    else {
        fetch(link.link)
            .then(response => response.json())
            .then(responseJson => {
                let newState = {
                    news: responseJson.articles,
                };
                newState[link.selectedChannel] = responseJson.articles;
                dispatch({
                    type: 'DISPLAY_NEWS',
                    newState
                });
            })
            .catch(error => {
                dispatch({
                    type: 'DISPLAY_ERROR',
                    error
                });
            })    
    }   
}

export {reducer, getNews}