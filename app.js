let findNewsButton = document.querySelector('.news-block')[0];

document.querySelector('.find-news-button').addEventListener('click', getNews);

function getLink() {
    let channels = document.querySelector('#news-sources');
    let selectedChannel = channels.options[channels.selectedIndex].value;
    return `https://newsapi.org/v2/top-headlines?sources=${selectedChannel}&apiKey=47d4a25cf54f4af0a8ee36e2b5f0cdeb`;
}


function getNews() {
    let link = getLink();
    fetch(link)
        .then(response => {
            let responseJSON = response.json();
            return responseJSON;
        })
        .then(news => {
            return displayNews(news.articles);
        })
        .catch(err => {
            console.log(err.message);
        });   
}

function displayNews(...newsArray) {
    const news = newsArray[0];
    document.querySelector('.news-block').innerHTML =  `<div></div>`;
    for (let i = 0; i < news.length; i++) {
        displayArticle(news[i]);
    }
}

function displayArticle(article) {
    let articleWrapper = document.createElement('div');
    articleWrapper.classList.add('article-wrapper');
    let title = `<p><b>Title:</b> ${article.title}</p>`;
    let description = `<p><b>Description:</b> ${article.description}</p>`;
    let linkToNews = `<p><a href=${article.url} target="_blank">Read this article</a></p>`;
    let articleInfo = title + description + linkToNews;
    articleWrapper.innerHTML = articleInfo;
    document.querySelector('.news-block').appendChild(articleWrapper);
}