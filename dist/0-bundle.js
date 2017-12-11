webpackJsonp([0],{340:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(341),a=function(e){return e&&e.__esModule?e:{default:e}}(n(342)),l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"getNews",value:function(e){var t=this;fetch(e).then(function(e){return e.json()}).then(function(e){return t.clearNewsBlock(),t.displayNews(e.articles)}).catch(function(e){t.clearNewsBlock(),t.displayError(),console.error(e.message)})}},{key:"displayNews",value:function(){for(var e=arguments.length<=0?void 0:arguments[0],t="",n=0;n<e.length;n++){t+=new a.default(e[n]).displayArticle(e[n])}document.querySelector(".news-block").innerHTML=t}},{key:"displayError",value:function(){var e=document.createElement("h2"),t=document.createTextNode("Sorry, something went wrong. Please, refresh the page");e.appendChild(t),document.querySelector(".news-block").append(e)}},{key:"clearNewsBlock",value:function(){document.querySelector(".news-block").innerHTML=""}},{key:"link",get:function(){var e=document.getElementById("news-sources").value;return i.config.apiUrl+"top-headlines?sources="+e+"&apiKey="+i.config.apiKey}}]),e}();t.default=l},341:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.config={apiKey:"47d4a25cf54f4af0a8ee36e2b5f0cdeb",apiUrl:"https://newsapi.org/v2/"}},342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t){var n=t.title,r=t.author,i=t.publishedAt,a=t.description,l=t.url;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=n,this.author=r||"Author is unknown",this.publishedAt=i?i.slice(0,10):"Publishing date is unavailable",this.description=a||"Description is unavailable",this.url=l}return r(e,[{key:"displayArticle",value:function(){return'<div class="article-wrapper">\n                <p class="article-title"><i class="fa fa-newspaper-o"></i>'+this.title+'</p>\n                <p class="article-author"><i class="fa fa-user-circle"></i>'+this.author+'</p>\n                <p class="article-publishedAt"><i class="fa fa-calendar"></i>'+this.publishedAt+'</p>\n                <p class="article-description"><i class="fa fa-caret-square-o-down"></i>'+this.description+'</p>\n                <p class="article-url"><i class="fa fa-external-link"></i><a href='+this.url+' target="_blank">Read this article</a></p>\n                </div>'}}]),e}();t.default=i}});