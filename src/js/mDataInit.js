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
        "bgi": "[]",
        "eles": "[]",
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
        }
    }]
}