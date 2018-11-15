function print() {
    var LODOP = getCLodop();
    if (LODOP.webskt && LODOP.webskt.readyState == 1) {

        // var i = LODOP.SELECT_PRINTER();
        // createResult('你选择了打印机:' + i);
        LODOP.SET_PRINTER_INDEX(0)
            /**获取打印机列表 */
        LODOP.Create_Printer_List(document.getElementById('Select01'));

        var a = LODOP.GET_PRINTER_COUNT();
        createResult('打印机个数:' + a);
        var b = LODOP.GET_PRINTER_NAME(0);
        createResult('打印机0名称:' + b);


        /**控制纸张大小 打印方向 连续打印和位置基点 */
        LODOP.SET_PRINT_PAGESIZE(3, 450);

        LODOP.PREVIEW('001');

        // LODOP.PRINT();
    } else {
        console.log('not ready');
    }
}


function createResult(value) {
    var div = document.createElement('div');
    div.innerHTML = value;
    document.body.append(div);
}



var qrcode = new QRCode("test", {
    text: "http://www.runoob.com",
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});