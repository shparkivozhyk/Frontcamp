'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NewsBlock = function () {
    function NewsBlock() {
        _classCallCheck(this, NewsBlock);
    }

    _createClass(NewsBlock, [{
        key: 'getNews',
        value: function getNews(link) {
            var _this = this;

            fetch(link).then(function (response) {
                return response.json();
            }).then(function (news) {
                _this.clearNewsBlock();
                return _this.displayNews(news.articles);
            }).catch(function (err) {
                _this.clearNewsBlock();
                _this.displayError();
                console.error(err.message);
            });
        }
    }, {
        key: 'displayNews',
        value: function displayNews() {
            var news = arguments.length <= 0 ? undefined : arguments[0];
            var articles = '';
            for (var i = 0; i < news.length; i++) {
                var article = new Article(news[i]);
                articles += article.displayArticle(news[i]);
            }
            document.querySelector('.news-block').innerHTML = articles;
        }
    }, {
        key: 'displayError',
        value: function displayError() {
            var errorElement = document.createElement('h2');
            var errorMessage = document.createTextNode('Sorry, something went wrong. Please, refresh the page');
            errorElement.appendChild(errorMessage);
            document.querySelector('.news-block').append(errorElement);
        }
    }, {
        key: 'clearNewsBlock',
        value: function clearNewsBlock() {
            document.querySelector('.news-block').innerHTML = '';
        }
    }, {
        key: 'link',
        get: function get() {
            var selectedChannel = document.getElementById('news-sources').value;
            return config.apiUrl + 'top-headlines?sources=' + selectedChannel + '&apiKey=' + config.apiKey;
        }
    }]);

    return NewsBlock;
}();