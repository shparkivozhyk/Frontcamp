const create = $("#createBlog");
const update = $("#updateBlog");
const remove = $("#removeBlog");
const title = $("#title");
const author = $("#author");
const body = $("#body");
const blog_id = $("#blog_id");

create.click(function() {
    let dataToSend = {
        "title": title.val(),
        "author": author.val(),
        "body": body.val(),
        "blog_id": blog_id.val()
    };
    $.ajax({
        method: "POST",
        data: dataToSend,
        url: '/blogs'
    });
});

remove.click(function() {

})
update.click(function() {
    let dataToSend = {
        "body": body.val(),
        "blog_id": blog_id.val()
    };
    let id = blog_id.val();
    $.ajax({
        method: "PUT",
        url: `/blogs/${id}`
    });
});