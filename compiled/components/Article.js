'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Article = function () {
    function Article(_ref) {
        var title = _ref.title,
            author = _ref.author,
            publishedAt = _ref.publishedAt,
            description = _ref.description,
            url = _ref.url;

        _classCallCheck(this, Article);

        this.title = title;
        this.author = author || 'Author is unknown';
        this.publishedAt = publishedAt ? publishedAt.slice(0, 10) : 'Publishing date is unavailable';
        this.description = description || 'Description is unavailable';
        this.url = url;
    }

    _createClass(Article, [{
        key: 'displayArticle',
        value: function displayArticle() {
            return '<div class="article-wrapper">\n                <p class="article-title"><i class="fa fa-newspaper-o"></i>' + this.title + '</p>\n                <p class="article-author"><i class="fa fa-user-circle"></i>' + this.author + '</p>\n                <p class="article-publishedAt"><i class="fa fa-calendar"></i>' + this.publishedAt + '</p>\n                <p class="article-description"><i class="fa fa-caret-square-o-down"></i>' + this.description + '</p>\n                <p class="article-url"><i class="fa fa-external-link"></i><a href=' + this.url + ' target="_blank">Read this article</a></p>\n                </div>';
        }
    }]);

    return Article;
}();