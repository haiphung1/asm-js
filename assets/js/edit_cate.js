function editCate(id) {
    let url = 'https://5f30c512373bc7001635ede4.mockapi.io/asm/categories/' + id;

    axios.get(url)
        .then(function(response){
            let category = response.data;
            let html = `
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Sửa danh mục</h5>
                        </div>
                        <form onsubmit="updateCate(${ category.id })">
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Tên danh mục <span class="text-danger">*</span></label>
                                    <input type="text" id="title" class="form-control"
                                        value="${ category.title }" placeholder="Tên danh mục">
                                    <span class="text-danger" id="err-cate"></span>    
                                </div>             
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal"
                                    onclick="closeModal()">                                   
                                    Hủy</button>
                                <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
                            </div>
                        </form>
                    </div>
                </div>
            `

            document.querySelector('#editCate').innerHTML = html;
        })
}

function closeModal() {
    $('#editCate').hide();
    $('.modal-backdrop').hide();
}