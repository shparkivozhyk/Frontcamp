webpackJsonp([0],{337:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(338),i=s(339);t.default=class{get link(){let e=document.getElementById("news-sources").value;return`${a.a.apiUrl}top-headlines?sources=${e}&apiKey=${a.a.apiKey}`}getNews(e){fetch(e).then(e=>e.json()).then(e=>(this.clearNewsBlock(),this.displayNews(e.articles))).catch(e=>{this.clearNewsBlock(),this.displayError(),console.error(e.message)})}displayNews(...e){const t=e[0];let s="";for(let e=0;e<t.length;e++)s+=new i.a(t[e]).displayArticle(t[e]);document.querySelector(".news-block").innerHTML=s}displayError(){let e=document.createElement("h2");const t=document.createTextNode("Sorry, something went wrong. Please, refresh the page");e.appendChild(t),document.querySelector(".news-block").append(e)}clearNewsBlock(){document.querySelector(".news-block").innerHTML=""}}},338:function(e,t,s){"use strict";t.a={apiKey:"47d4a25cf54f4af0a8ee36e2b5f0cdeb",apiUrl:"https://newsapi.org/v2/"}},339:function(e,t,s){"use strict";t.a=class{constructor({title:e,author:t,publishedAt:s,description:a,url:i}){this.title=e,this.author=t||"Author is unknown",this.publishedAt=s?s.slice(0,10):"Publishing date is unavailable",this.description=a||"Description is unavailable",this.url=i}displayArticle(){return`<div class="article-wrapper">\n                <p class="article-title"><i class="fa fa-newspaper-o"></i>${this.title}</p>\n                <p class="article-author"><i class="fa fa-user-circle"></i>${this.author}</p>\n                <p class="article-publishedAt"><i class="fa fa-calendar"></i>${this.publishedAt}</p>\n                <p class="article-description"><i class="fa fa-caret-square-o-down"></i>${this.description}</p>\n                <p class="article-url"><i class="fa fa-external-link"></i><a href=${this.url} target="_blank">Read this article</a></p>\n                </div>`}}}});