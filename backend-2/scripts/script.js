const create = $("#createBlog");
const update = $("#updateBlog");
const remove = $("#removeBlog");
const title = $("#title");
const author = $("#author");
const body = $("#body");
const blog_id = $("#blog_id");
const user_name = $("#userName");
const password = $("#password");
const sign_in = $("#signIn");
const sign_up = $("#signUp");

sign_in.click(function() {

});

sign_up.click(function() {
    let dataToSend = {
        "login": user_name.val(),
        "password": password.val()
    };
    $.ajax({
        "method": "POST",
        "data": dataToSend,
        "url": '/login'
    });
})

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
    let id = blog_id.val();
    $.ajax({
        method:"DELETE",
        url: `/blogs/${id}`
    })
})
update.click(function() {
    let dataToSend = {
        "body": body.val(),
    };
    let id = blog_id.val();
    $.ajax({
        method: "PUT",
        url: `/blogs/${id}`,
        data: dataToSend
    });
});