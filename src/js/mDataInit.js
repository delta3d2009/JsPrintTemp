/**
 * 数据初始化
 * 
 * editTmp 模板参数配置（接口查询记过，如果无数据将自动使用默认数据）
 * fontFamilyList 字体列表配置
 * fontSizeList 字号列表配置
 * 
 */
var mDataInit = {
    editTmp: { "printId": 27, "isDel": "901002", "bgi": "[{\"id\":\"m_1543819030923\",\"w\":320,\"h\":420,\"l\":0,\"t\":1,\"url\":\"/http://easystop.com.cn:8080/img/print/add.png\",\"level\":0,\"name\":\"a7.jpg\",\"data\":\"\"},{\"id\":\"m_1543819036661\",\"w\":100,\"h\":420,\"l\":0,\"t\":220,\"url\":\"/img/qr_code.png\",\"level\":1,\"name\":\"qr_code.png\",\"data\":\"\"}]", "eles": "[{\"col\":1,\"differX\":0,\"differY\":0,\"filed\":\"customerTime\",\"height\":26,\"id\":\"m_1543819038067\",\"order\":0,\"val\":\"消费时间\",\"width\":90,\"x\":10,\"y\":10,\"pos\":{\"col\":1,\"row\":1}},{\"col\":1,\"differX\":0,\"differY\":0,\"filed\":\"qrCodePath\",\"height\":26,\"id\":\"m_1543819038386\",\"order\":1,\"val\":\"入园二维码\",\"width\":100,\"x\":10,\"y\":46,\"pos\":{\"col\":1,\"row\":2}},{\"col\":1,\"differX\":0,\"differY\":0,\"filed\":\"productPayPrice\",\"height\":26,\"id\":\"m_1543819038706\",\"order\":2,\"val\":\"产品价格\",\"width\":90,\"x\":10,\"y\":82,\"pos\":{\"col\":1,\"row\":3}}]", "name": "1121", "height": 320, "width": 320, "fontSize": 12, "fontFamily": "微软雅黑", "fontColor": "#000", "dx": 0, "dy": 0, "img": "", "printSize": "320*320", "gmtCreate": "Dec 3, 2018 2:39:11 PM" },
    fontFamilyList: ['宋体', '黑体', '楷体', '新宋体', '微软雅黑'],
    fontSizeList: [12, 14, 16, 18, 20, 24, 28, 32],
    data: [{
        id: 1,
        title: '打印项目1',
        data: {
            filed1: 'aaa',
            filed2: 'bbb',
            filed3: 'ccc',
            filed4: 'ddd',
        },

    }, {
        id: 2,
        title: '打印项目2',
        data: {
            filed5: 'eee',
            filed6: 'fff',
            filed7: 'ggg',
            filed8: 'hhh',
            filed9: 'eee',
            filed10: 'fff',
            filed11: 'ggg',
            filed12: 'hhh',
            filed13: 'eee',
            filed14: 'fff',
            filed15: 'ggg',
            filed16: 'hhh',
        },
    }, {
        id: -1,
        title: '自定义选项',
        data: {
        }
    }]
}