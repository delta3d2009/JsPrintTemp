/**
 * 数据初始化
 * 
 * editTmp 模板参数配置（接口查询记过，如果无数据将自动使用默认数据）
 * fontFamilyList 字体列表配置
 * fontSizeList 字号列表配置
 * 
 */
var mDataInit = {
    editTmp: {
        "printId": 6,
        "isDel": "901002",
        "bgi": "[{\"id\":\"m_1543215991662\",\"w\":320,\"h\":420,\"l\":0,\"t\":30,\"url\":\"img/xiaoguotu.jpg\",\"level\":\"0\",\"name\":\"0.jpg\",\"data\":\"\"},{\"id\":\"m_1543215993240\",\"w\":320,\"h\":420,\"l\":50,\"t\":80,\"url\":\"img/big_bgcolor.jpg\",\"level\":\"0\",\"name\":\"16pic_668787_b.jpg\",\"data\":\"\"}]",
        "eles": "[{\"col\":\"1\",\"differX\":\"0\",\"differY\":\"0\",\"filed\":\"customerTime\",\"height\":\"26\",\"id\":\"m_1543215998567\",\"order\":\"0\",\"val\":\"消费时间\",\"width\":\"90\",\"x\":\"10\",\"y\":\"10\",\"pos\":{\"col\":\"1\",\"row\":\"1\"}},{\"col\":\"1\",\"differX\":\"0\",\"differY\":\"0\",\"filed\":\"qrCodePath\",\"height\":\"26\",\"id\":\"m_1543215998830\",\"order\":\"1\",\"val\":\"入园二维码\",\"width\":\"100\",\"x\":\"10\",\"y\":\"46\",\"pos\":{\"col\":\"1\",\"row\":\"2\"}},{\"col\":\"1\",\"differX\":\"0\",\"differY\":\"0\",\"filed\":\"productPayPrice\",\"height\":\"26\",\"id\":\"m_1543215999733\",\"order\":\"2\",\"val\":\"产品价格\",\"width\":\"90\",\"x\":\"10\",\"y\":\"82\",\"pos\":{\"col\":\"1\",\"row\":\"3\"}},{\"col\":\"1\",\"differX\":\"0\",\"differY\":\"0\",\"filed\":\"productNums\",\"height\":\"26\",\"id\":\"m_1543216000070\",\"order\":\"3\",\"val\":\"购买数量\",\"width\":\"90\",\"x\":\"10\",\"y\":\"118\",\"pos\":{\"col\":\"1\",\"row\":\"4\"}},{\"col\":\"1\",\"differX\":\"0\",\"differY\":\"0\",\"filed\":\"customerUserId\",\"height\":\"26\",\"id\":\"m_1543216000390\",\"order\":\"4\",\"val\":\"身份证\",\"width\":\"90\",\"x\":\"10\",\"y\":\"154\",\"pos\":{\"col\":\"1\",\"row\":\"5\"}},{\"col\":\"1\",\"differX\":\"0\",\"differY\":\"0\",\"filed\":\"gmtCreate\",\"height\":\"26\",\"id\":\"m_1543216001071\",\"order\":\"5\",\"val\":\"购买时间\",\"width\":\"90\",\"x\":\"10\",\"y\":\"190\",\"pos\":{\"col\":\"1\",\"row\":\"6\"}},{\"col\":\"1\",\"differX\":\"0\",\"differY\":\"0\",\"filed\":\"playTime\",\"height\":\"26\",\"id\":\"m_1543216002230\",\"order\":\"6\",\"val\":\"票有效期\",\"width\":\"90\",\"x\":\"10\",\"y\":\"226\",\"pos\":{\"col\":\"1\",\"row\":\"7\"}},{\"col\":\"1\",\"differX\":\"0\",\"differY\":\"0\",\"filed\":\"productName\",\"height\":\"26\",\"id\":\"m_1543216002611\",\"order\":\"7\",\"val\":\"产品名称\",\"width\":\"90\",\"x\":\"10\",\"y\":\"262\",\"pos\":{\"col\":\"1\",\"row\":\"8\"}},{\"col\":\"1\",\"differX\":\"0\",\"differY\":\"0\",\"filed\":\"customerName\",\"height\":\"26\",\"id\":\"m_1543216002942\",\"order\":\"8\",\"val\":\"用户昵称\",\"width\":\"90\",\"x\":\"10\",\"y\":\"298\",\"pos\":{\"col\":\"1\",\"row\":\"9\"}},{\"col\":\"2\",\"differX\":\"0\",\"differY\":\"0\",\"filed\":\"instructions\",\"height\":\"26\",\"id\":\"m_1543216004510\",\"order\":\"9\",\"val\":\"购买须知\",\"width\":\"90\",\"x\":\"120\",\"y\":\"10\",\"pos\":{\"col\":\"2\",\"row\":\"1\"}},{\"col\":\"2\",\"differX\":\"0\",\"differY\":\"0\",\"filed\":\"openingTime\",\"height\":\"26\",\"id\":\"m_1543216004790\",\"order\":\"10\",\"val\":\"开闭园时间\",\"width\":\"100\",\"x\":\"120\",\"y\":\"46\",\"pos\":{\"col\":\"2\",\"row\":\"2\"}},{\"col\":\"2\",\"differX\":\"0\",\"differY\":\"0\",\"filed\":\"distributionChannel\",\"height\":\"26\",\"id\":\"m_1543216005150\",\"order\":\"11\",\"val\":\"分销商名称\",\"width\":\"100\",\"x\":\"120\",\"y\":\"82\",\"pos\":{\"col\":\"2\",\"row\":\"3\"}},{\"col\":\"2\",\"differX\":\"0\",\"differY\":\"0\",\"filed\":\"putOffTime\",\"height\":\"26\",\"id\":\"m_1543216006477\",\"order\":\"12\",\"val\":\"推迟入园分钟数\",\"width\":\"124\",\"x\":\"120\",\"y\":\"118\",\"pos\":{\"col\":\"2\",\"row\":\"4\"}}]",
        "name": "新的打印模板",
        "height": 350,
        "width": 350,
        "fontSize": 12,
        "fontFamily": "微软雅黑",
        "fontColor": "#000",
        "dx": 0,
        "dy": 0,
        "img": "/img/20181126150947.png",
        "printSize": "350*350",
        "gmtCreate": "Nov 26, 2018 3:09:57 PM"
    },
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
            cu1: 'aaa',
            cu2: 'bbb',
            cu3: 'ccc',
            cu4: 'ddd',
        }
    }]
}