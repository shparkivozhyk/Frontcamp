import "babel-polyfill"
import "promise-polyfill"
import "whatwg-fetch"
import "../styles/styles.scss"
import "../../node_modules/font-awesome/css/font-awesome.css"
import "../../node_modules/typeface-sansita-one/index.css"
import {createStore} from "./Redux/createStore.js"
import {reducer, getNews} from "./Redux/reducers.js"
import {Singleton} from "./components/NewsBlock.js"

/*
    Observer pattern: observer
    Invokes when subject changes

*/
const render = () =>  {
    let newsBlock = Singleton.getNewsBlockInstance();
    let state = store.getState();
    return newsBlock.displayNews(state.news);   
}

const store = createStore(reducer);
store.subscribe(render);

document.getElementById('find-news-button').addEventListener('click', (event) =>  {
    store.dispatch(getNews);
});
