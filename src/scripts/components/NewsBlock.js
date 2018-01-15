import {config} from '../config.js'
import {getArticle} from './Article.js'

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
        let iterator = new Iterator(news);
        iterator.forEach((item) => {
            let article = getArticle(item);
            let articleTemplate = article.getArticleTemplate();
            articles += articleTemplate;
        });
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

class Iterator {
    constructor(items) {
        this.index = 0;
        this.items = items;
    }
    toFirst() {
        this.index = 0;
        return this.next();
    }
    next() {
        return this.items[++this.index];
    }
    isLast() {
        return this.index >= this.items.length;
    }
    forEach(cb) {
        for (let item = this.items[0]; !this.isLast(); item = this.next()) {
            cb(item);
        }
    }

}

/*
    Singleton pattern
    Used in app.js and allows not to create a lot of NewsBlock instances
*/
export const Singleton = (() => {
    let instance;
    const createInstance = () => new NewsBlock();
    return {
        getNewsBlockInstance: () => {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();