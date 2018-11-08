$(function() {
    $(document).on("click", function(evt) {

    })
    $(".dropDwon").on("click", function(evt) {
        $(this).children('.sui-dropdown-menu').toggle('active');
    })
    new mDrag({ id: "dymic-1", data: new mData.mPar("dymic-1", "bbb", "测试") });
    new mDrag({ id: "acp_databox", data: new mData.mPar("acp_databox", "cccc", "测试2") });

    $(".acp_itemwrap").on("click", function(evt) {
        var a = new addMPPI({
            filed: "dddddd",
            val: "测试",
            container: "a_con_template"
        });
        console.log(mData.mdl);

    })

    document.getElementById('del-1').addEventListener('click', function(evt) {
        this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);
    })
})