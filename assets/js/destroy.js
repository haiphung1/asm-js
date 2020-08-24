function deletePost(cateId, postId) {
    const url = 'https://5f30c512373bc7001635ede4.mockapi.io/asm/categories/' + cateId + '/posts/' + postId;

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
                        buttons: false,
                    });
                    window.location.href = 'index.html?cate=' + cateId;
                });
        } else {
          swal("Không thực hiện hành động!");
        }
    });

}