const baseUrl = window.location.href;
const cateId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
const urlCate = 'https://5f30c512373bc7001635ede4.mockapi.io/asm/categories/' + cateId;
const url = 'https://5f30c512373bc7001635ede4.mockapi.io/asm/categories/' + cateId + '/posts?sortBy=id&order=desc';

axios.get(urlCate)
  .then(function(response) {
    let span = document.createElement('span');
    span.setAttribute('class', 'badge badge-primary');
    span.innerText = response.data.title;
    document.querySelector('#cate-post').appendChild(span);
  })
  .catch(function(error) {
    console.log(error)
  })

axios.get(url)
  .then(function(response) {
    let html = '';
    response.data.forEach(function(post, index) {
      html += `
        <tr>
            <td>${ index + 1 }</td>
            <td>
                ${ post.title }
            </td>
            <td>${ post.description }</td>
            <td>
                <div class="float-right">
                    <a href="edit.html?postId=${ post.id}?cateId=${ cateId }" class="btn btn-info btn-sm">
                        <i class="fas fa-edit"></i>
                    </a>
                    <a href="javascript:void(0)" class="btn btn-danger btn-sm" onclick="deletePost(${ cateId } ,${ post.id })">
                        <i class="fas fa-trash-alt"></i>
                    </a>
                </div>
            </td>
        </tr>
      `
    });

    document.querySelector('.list_posts').innerHTML = html;
  })
  .catch(function(error) {
    console.log(error)
  })
