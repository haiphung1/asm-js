function create_cate() {
    event.preventDefault();

    let url = 'https://5f30c512373bc7001635ede4.mockapi.io/asm/categories';
    let cate_name = document.querySelector('#cate_name').value;

    if (cate_name == '') {
        document.querySelector('#err-cate').innerText = 'Không được để trống tên danh mục';
        
        return false;
    }

    $.ajax({
        type: 'POST',
        url: url,
        data: {
            title: cate_name
        }
    }).done(function(data){
        $('#exampleModalCenter').hide();
        $('.modal-backdrop').hide();
        $('#cate_name').val('');
        document.querySelector('#err-cate').innerText = '';

        let index = $('tr #index').last().text();
        console.log(index++);
            let html = `
              <tr>
                  <td id="index">${ index++ }</td>
                  <td id="cate-${ data.id }">
                      ${ data.title }
                  </td>
                  <td>
                      <div class="float-right">
                        <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#editCate"
                            onclick="editCate(${ data.id })">
                            <i class="fas fa-edit"></i>
                        </button>
                          <a href="#" class="btn btn-danger btn-sm" onclick="deleteCategory(${ data.id })">
                              <i class="fas fa-trash-alt"></i>
                          </a>
                      </div>
                  </td>
              </tr>
            `
        $('.list_categories').append(html);

        toastr.success('Tạo danh mục mới thành công');
    })
}