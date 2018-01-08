import {config} from '../config.js'
import Article from './Article.js'

export default class NewsBlock {

    get link() {
        let selectedChannel = document.getElementById('news-sources').value;
        return {
            link:`${config.apiUrl}top-headlines?sources=${selectedChannel}&apiKey=${config.apiKey}`, 
            selectedChannel
        };
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

    displayError(error) {
        this.clearNewsBlock();
        let errorElement = document.createElement('h2');
        const errorMessage = document.createTextNode('Sorry, something went wrong. Please, refresh the page');
        errorElement.appendChild(errorMessage);
        document.querySelector('.news-block').append(errorElement);
        console.error(error);
    }

    clearNewsBlock() {
        document.querySelector('.news-block').innerHTML = '';
    }

}
