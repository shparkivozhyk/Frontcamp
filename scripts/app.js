import "promise-polyfill"
import "whatwg-fetch"

import NewsBlock from './components/NewsBlock.js'

function newsHandler() {
   const handler = new NewsBlock();
   const link = handler.link;
   return handler.getNews(link);
}

document.getElementById('find-news-button').addEventListener('click', newsHandler);




