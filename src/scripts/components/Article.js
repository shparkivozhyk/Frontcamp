export const getArticle = (news) => {
    if (news.urlToImage) {
        let article = new ArticleWithImage(news);
        return article.displayArticleWithImage();
    }
    else {
        let article = new Article(news);
        return article.displayArticle();
    }
}

class Article {

    constructor({title, author, publishedAt, description, url}) {
        this.title = title;
        this.author = author || 'Author is unknown';
        this.publishedAt = publishedAt ? publishedAt.slice(0, 10): 'Publishing date is unavailable';
        this.description = description || 'Description is unavailable';
        this.url = url;
    }
    
    displayArticle() {
        return `<div class="article-wrapper">
                <p class="article-title"><i class="fa fa-newspaper-o"></i>${this.title}</p>
                <p class="article-author"><i class="fa fa-user-circle"></i>${this.author}</p>
                <p class="article-publishedAt"><i class="fa fa-calendar"></i>${this.publishedAt}</p>
                <p class="article-description"><i class="fa fa-caret-square-o-down"></i>${this.description}</p>
                <p class="article-url"><i class="fa fa-external-link"></i><a href=${this.url} target="_blank">Read this article</a></p>
                </div>`;
    }

}

class ArticleWithImage extends Article {
    constructor(news) {
        super(news);
        this.image = news.urlToImage;
    }

    displayArticleWithImage() {
        let self = this;
        let articleWrapper = this.displayArticle();
        return `<div class='article-with-image-wrapper'>
                <div class="article-image"><img src=${self.image}></img></div>
                <div class="article-wrapper-side">${articleWrapper}</div>
                </div>`;
    }
}