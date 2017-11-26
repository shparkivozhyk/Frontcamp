class Article {

    displayArticle(article) {
        console.log(article);
        let articleWrapper = document.createElement('div');
        articleWrapper.classList.add('article-wrapper');
        if (article.title) {
            articleWrapper.appendChild(this.displayPieceOfArticle(article, 'title', 'newspaper-o'));
        }
        if (article.author) {
            articleWrapper.appendChild(this.displayPieceOfArticle(article, 'author', 'user-circle'));
        }
        if (article.publishedAt) {
            articleWrapper.appendChild(this.displayPieceOfArticle(article, 'publishedAt', 'calendar'));
        }
        if (article.description) {
            articleWrapper.appendChild(this.displayPieceOfArticle(article, 'description', 'caret-square-o-down'));
        }
        if (article.url) {
            articleWrapper.appendChild(this.displayPieceOfArticle(article, 'url', 'external-link'));
        }
        return articleWrapper;
    } 

    displayPieceOfArticle(article, pieceName, fontName) {
        let piece = document.createElement('p');
        piece.classList.add(`article-${pieceName}`);
        let piecePic = document.createElement('i');
        piecePic.classList.add('fa', `fa-${fontName}`);
        piece.appendChild(piecePic);
        if (pieceName === 'url') {
            const link = document.createElement('a');
            link.setAttribute('href', article[pieceName]);
            link.setAttribute('target', '_blank');
            const linkText = document.createTextNode('Read this article');
            link.appendChild(linkText);
            piece.appendChild(link);
        }
        else {
            const text = pieceName === 'publishedAt' ? article[pieceName].slice(0, 10) : article[pieceName];
            const pieceText = document.createTextNode(text);
            piece.appendChild(pieceText);
        }    
        return piece;
    }

}