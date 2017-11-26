
document.querySelector('.find-news-button').addEventListener('click', newsHandler);

function newsHandler() {
   const handler = new NewsBlock();
   const link = handler.Link;
   return handler.getNews(link);
}



