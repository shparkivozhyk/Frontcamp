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

/*
    Proxy pattern (draft)
*/
const NewsProxy = (function() {
    let cache = {status: 'resolved'};
    return {
        isInCache: function(source) {
            return cache[source.selectedChannel];
        },
        updateNews: function(source) {
            if (!this.isInCache(source)) {
                cache.status = 'pending';
                this.sendNewsResponse(source);
            }
        },
        setInCache: function(channel, results) {
                cache[channel] = results;
        },
        sendNewsResponse: function(source) {
                fetch(source.link)
                        .then(response => response.json())
                        .then(responseJson => {
                            let articles = responseJson.articles;
                            this.setInCache(source.selectedChannel, articles);
                            cache.status = 'resolved';
                        })
        },
        getNews: function(channel) {
            if (status === 'resolved') {
                return cache[channel];
            }
            else {
                setTimeout(this.getNews, 1000);
            }
        }


    }
})();


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