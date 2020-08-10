function searchPost() {
    event.preventDefault();

    let search = document.querySelector('#search').value;
    let filter = document.querySelector('#filter').value;
    let urlSearch = 'https://5f30c512373bc7001635ede4.mockapi.io/asm/posts?search=' + search;
    let urlFilter = 'https://5f30c512373bc7001635ede4.mockapi.io/asm/posts?' + filter + '=' + search;
    
    const requestSearch = axios.get(urlSearch);
    const requestFilter = axios.get(urlFilter);

    axios.all([requestSearch, requestFilter])
        .then(
            axios.spread(function(...responses){

                let response = '';
                let html = '';

                if (filter == '') {
                    response = responses[0];
                } else {
                    response = responses[1]
                }

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
        ).catch(function(errors){
            console.log(errors)
        })
}