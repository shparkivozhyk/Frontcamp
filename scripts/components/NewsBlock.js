class NewsBlock {

    get link() {
        let selectedChannel = document.getElementById('news-sources').value;
        return `${apiUrl}top-headlines?sources=${selectedChannel}&apiKey=${apiKey}`;
    }

    getNews(link) {
        fetch(link)
            .then(response => {
                return response.json();
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
        let articles = '';
        for (let i = 0; i < news.length; i++) {
            let article = new Article(news[i]);
            articles += article.displayArticle(news[i]);
        }
        document.querySelector('.news-block').innerHTML = articles;
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
