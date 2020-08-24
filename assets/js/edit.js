const baseUrl = window.location.href;
const postId = baseUrl.substring(baseUrl.lastIndexOf('postId=') + 7, baseUrl.lastIndexOf('?'));
const cateId = baseUrl.substring(baseUrl.lastIndexOf('cateId=') + 7);
const url = 'https://5f30c512373bc7001635ede4.mockapi.io/asm/categories/' + cateId + '/posts/' + postId;

axios.get(url)
    .then(function(response){
        let post = response.data;
        let html = `
            <form role="form" id="form_update_post" onsubmit="updatePost(${ post.id })" class="needs-validation" novalidate>
                <input type="hidden" value="${ cateId }" id="cateId">
                 <div class="card-body">
                    <div class="form-group">
                        <label>Tiêu đề <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" placeholder="Tiêu đề" id="title" value="${ post.title }" required>
                        <div class="invalid-feedback">
                            Tiêu đề không được để trống
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Chi tiết bài tiết <span class="text-danger">*</span></label>
                        <textarea rows="10" class="form-control" 
                            placeholder="Chi tiết bài viết" id="description" required>${ post.description }</textarea>
                        <div class="invalid-feedback">
                            Chi tiết bài viết không được để trống
                        </div>
                    </div>
                </div>
                <div class="card-footer text-center">
                    <button type="submit" class="btn btn-info">Cập nhập</button>
                    <a href="index.html" class="btn btn-danger">Trở lại</a>
                </div>               
            </form>
        `

        document.querySelector('#edit_post').innerHTML = html;
    })
