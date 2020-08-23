function deleteCategory(id) {
    const url = 'https://5f30c512373bc7001635ede4.mockapi.io/asm/categories/' + id;

    swal({
        title: "Bạn chắc có muốn xóa danh mục này không?",
        icon: "warning",
        buttons: ["Hủy", "Thực hiện"],
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            axios.delete(url)
                .then(function(){
                    swal("Bạn đã xóa thành công!", {
                        icon: "success",
                        buttons: false,
                    });
                    window.location.href = 'list_cate.html';
                });
        } else {
          swal("Không thực hiện hành động!");
        }
    });

}