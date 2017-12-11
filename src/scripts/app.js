import "babel-polyfill"
import "promise-polyfill"
import "whatwg-fetch"
import "../styles/styles.scss"
import "../../node_modules/font-awesome/css/font-awesome.css"

function newsHandler() {
    import(
    /* webpackChunkName: "lazynews-bundle" */
    /* webpackMode: "lazy" */
    './components/NewsBlock.js').then(module => {
            let Handler = module.default;
            const handler = new Handler();
            const link = handler.link;
            return handler.getNews(link);
    });
}

document.getElementById('find-news-button').addEventListener('click', (event) =>  newsHandler());




