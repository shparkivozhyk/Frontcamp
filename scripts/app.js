function newsHandler() {
   const handler = new NewsBlock();
   const link = handler.link;
   return handler.getNews(link);
}
console.log('this console.log will be removed with consolelog-plugin');

document.getElementById('find-news-button').addEventListener('click', newsHandler);




