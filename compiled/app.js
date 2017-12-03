'use strict';

function newsHandler() {
   var handler = new NewsBlock();
   var link = handler.link;
   return handler.getNews(link);
}


document.getElementById('find-news-button').addEventListener('click', newsHandler);