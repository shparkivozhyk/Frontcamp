import NewsBlock from "../components/NewsBlock.js"
const handler = new NewsBlock();

const reducer = (state, action) => {
    state = {
        news: []
    }

    switch (action.type) {
        case 'DISPLAY_NEWS':
            return Object.assign(state, {
                news: action.news
            });
        case 'DISPLAY_ERROR':
            handler.displayError(action.error);
            return {};
    }
}

const getNews = (dispatch, state) => {
    const link = handler.link;
    fetch(link.link)
        .then(response => response.json())
        .then(responseJson => {
            dispatch({
                type: 'DISPLAY_NEWS',
                news: responseJson.articles,
                channel: selectedChannel
            });
        })
        .catch(error => {
            dispatch({
                type: 'DISPLAY_ERROR',
                error
            });
        })       
}

export {reducer, getNews}