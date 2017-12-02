function newsHandler() {
   const handler = new NewsBlock();
   const link = handler.link;
   return handler.getNews(link);
}

document.getElementById('find-news-button').addEventListener('click', newsHandler);




