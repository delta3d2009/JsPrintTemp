$(function() {
    // $(".dropDwon").on("click", function(evt) {
    //     $(this).children('.sui-dropdown-menu').toggle('active');
    // })

    $(".dymic").on("click", function(evt) {
        $(".dymic").removeClass('active');
        $(this).addClass('active');
    });
    // new mDrag({ id: "dymic-1", data: new mData.mPar("dymic-1", "bbb", "测试") });
    new mDrag({ id: "acp_databox", data: null });

    // $(".acp_itemwrap").on("click", function(evt) {
    //     var a = new addMPPI({
    //         filed: "dddddd",
    //         val: "测试",
    //         container: "a_con_template"
    //     });
    // })

    // document.getElementById('del-1').addEventListener('click', function(evt) {
    //     mData.delData(this.parentNode.parentNode.parentNode.id);
    //     this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);
    // })
})