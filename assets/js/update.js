function updatePost(postId) {
    event.preventDefault();
    
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const cateId = document.querySelector('#cateId').value;
    const url = 'https://5f30c512373bc7001635ede4.mockapi.io/asm/categories/' + cateId + '/posts/' + postId;

    if (title == '' || title.trim() == '' || description == '' || description.trim() == '') {
        return ;
    }
    
    axios({
        method: 'PUT',
        url: url,
        data: {
            id: postId,
            categoryId: cateId,
            title: title,
            description: description
        }
    }).then(function(){
        $('.loading').show();
        setTimeout(function(){
            $('.loading').remove();
            window.location.href = 'index.html?messages=success?cate=' + cateId;
        }, 1500);
    });
}
