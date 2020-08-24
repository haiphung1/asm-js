const url = 'https://5f30c512373bc7001635ede4.mockapi.io/asm/categories';

axios.get(url)
  .then(function(response) {
    let html = '';
    response.data.forEach(function(category, index) {
      html += `
        <option value="${ category.id }">${ category.title }</option>
      `
    });
  
    document.querySelector('#cate_id').innerHTML = html;
  })
  .catch(function(error) {
    console.log(error)
  })

const onFormSubmit = function (event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const cate_id = document.querySelector('#cate_id').value;
    const url = 'https://5f30c512373bc7001635ede4.mockapi.io/asm/categories/' + cate_id + '/posts';
    
    if (title == '' || title.trim() == '' || description == '' || description.trim() == '') {
        return ;
    }

    axios({
        method: 'POST',
        url: url,
        data: {
            title: title,
            description: description
        }
    }).then(function(){
        $('.loading').show();
        setTimeout(function(){
            $('.loading').remove();
            window.location.href = 'index.html?messages=success?cate=' + cate_id;
        }, 1500);
    });
}

document.querySelector('#form_create_post').onsubmit = onFormSubmit;