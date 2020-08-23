function updateCate(id) {
    event.preventDefault();
    
    let title = document.querySelector('#title').value;
    let url = 'https://5f30c512373bc7001635ede4.mockapi.io/asm/categories/' + id;

    $.ajax({
        type: 'PUT',
        url: url,
        data: {
            id: id,
            title: title
        }
    }).done(function(data){
        $('#editCate').hide();
        $('.modal-backdrop').hide();
        toastr.success('Sửa danh mục thành công!');
        document.querySelector('#cate-' + id).textContent = '';        
        document.querySelector('#cate-' + id).append(data.title);
    })
}