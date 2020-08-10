function deletePost(id) {
    const url = 'https://5f30c512373bc7001635ede4.mockapi.io/asm/posts/' + id;

    swal({
        title: "Bạn chắc có muốn xóa bài viết này?",
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
                    });
                    window.location.href = 'index.html';
                });
        } else {
          swal("Không thực hiện hành động!");
        }
    });

}