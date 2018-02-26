const create = $("#createBlog");
const update = $("#updateBlog");
const remove = $("#removeBlog");
const title = $("#title");
const author = $("#author");
const body = $("#body");
const blog_id = $("#blog_id");
const user_name = $("#username");
const password = $("#password");
const sign_in = $("#signIn");
const sign_up = $("#signUp");

sign_in.click(function() {
    var dataToSend = {
        "username": user_name.val(),
        "password": password.val()
    };
    var request = $.ajax({
        method: "POST",
        data: dataToSend,
        url: '/login'
    });

    request.always(function(data, textStatus, req) {
        window.location = data.redirect;
    })
});

sign_up.click(function() {
    var dataToSend = {
        "username": user_name.val(),
        "password": password.val()
    };
    console.log(dataToSend);
    $.ajax({
        "method": "POST",
        "data": dataToSend,
        "url": '/login'
    });
})

create.click(function() {
    var dataToSend = {
        "title": title.val(),
        "author": author.val(),
        "body": body.val(),
        "blog_id": blog_id.val()
    };
    console.log('dataToSend: ', dataToSend);
    $.ajax({
        method: "POST",
        data: dataToSend,
        url: '/blogs'
    });
});

remove.click(function() {
    var id = blog_id.val();
    $.ajax({
        method:"DELETE",
        url: '/blogs/'+id
    })
})
update.click(function() {
    var dataToSend = {
        "body": body.val(),
    };
    var id = blog_id.val();
    $.ajax({
        method: "PUT",
        url: '/blogs/'+id,
        data: dataToSend
    });
});