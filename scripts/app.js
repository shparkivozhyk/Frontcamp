function newsHandler() {
   const handler = new NewsBlock();
   const link = handler.link;
   return handler.getNews(link);
}
console.log('this console.log should be removed with plugin');

document.getElementById('find-news-button').addEventListener('click', newsHandler);




