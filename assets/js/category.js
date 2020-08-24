const url = 'https://5f30c512373bc7001635ede4.mockapi.io/asm/categories';

axios.get(url)
  .then(function(response) {
    let html = '';
    response.data.forEach(function(category, index) {
      html += `
        <tr>
            <td id="index">${ index + 1 }</td>
            <td id="cate-${ category.id }">
                ${ category.title }
            </td>
            <td style="width: 150px">
                <div class="float-right">
                    <a href="./index.html?cate=${ category.id }" class="btn btn-primary btn-sm">
                      <i class="fas fa-eye"></i>
                    </a>
                    <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#editCate"
                        onclick="editCate(${ category.id })">
                        <i class="fas fa-edit"></i>
                    </button>
                    <a href="javascript:void(0)" class="btn btn-danger btn-sm" onclick="deleteCategory(${ category.id })">
                        <i class="fas fa-trash-alt"></i>
                    </a>
                </div>
            </td>
        </tr>
      `
    });

    document.querySelector('.list_categories').innerHTML = html;
  })
  .catch(function(error) {
    console.log(error)
  })
