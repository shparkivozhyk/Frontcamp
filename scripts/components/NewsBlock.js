class NewsBlock {

    get Link() {
        let channels = document.querySelector('#news-sources');
        let selectedChannel = channels.options[channels.selectedIndex].value;
        return `https://newsapi.org/v2/top-headlines?sources=${selectedChannel}&apiKey=47d4a25cf54f4af0a8ee36e2b5f0cdeb`;
    }

    getNews(link) {
        fetch(link)
            .then(response => {
                let responseJSON = response.json();
                return responseJSON;
            })
            .then(news => {
                this.clearNewsBlock();
                return this.displayNews(news.articles);
            })
            .catch(err => {
                
                this.clearNewsBlock();
                this.displayError();
                console.error(err.message);
            });   
    }

    displayNews(...newsArray) {
        const news = newsArray[0];
        let articles = document.createDocumentFragment();
        let article = new Article();
        for (let i = 0; i < news.length; i++) {
            articles.append(article.displayArticle(news[i]));
        }
        document.querySelector('.news-block').appendChild(articles);
    }

    displayError() {
        let errorElement = document.createElement('h2');
        const errorMessage = document.createTextNode('Sorry, something went wrong. Please, refresh the page');
        errorElement.appendChild(errorMessage);
        document.querySelector('.news-block').append(errorElement);
    }

    clearNewsBlock() {
        document.querySelector('.news-block').innerHTML = '';
    }

}
