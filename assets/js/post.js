const url = 'https://5f30c512373bc7001635ede4.mockapi.io/asm/posts?sortBy=id&order=desc';

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
                    <a href="edit.html?id=${ post.id}" class="btn btn-info btn-sm">
                        <i class="fas fa-edit"></i>
                    </a>
                    <a href="#" class="btn btn-danger btn-sm" onclick="deletePost(${ post.id })">
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
