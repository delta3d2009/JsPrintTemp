(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory : global.mData = factory
})(this, (function () {
    /**
     * 
     * 数据管理
     * 
     */
    var mData = {
        /**
         * 
         * 配置参数
         * 
         */
        mData_global: {
            first_top: 10, //默认第一项的上边距
            first_left: 10, //默认第一项的做边距
            interval_x: 10, //横向间距
            interval_y: 10, //纵向间距
            ele_max_width: 160, //默认300像素
            ele_min_width: 80, //默认200像素
        },
        /**
         * 
         * 元素函数 ------>构造元素对象
         * 
         * _id 元素ID
         * _filed 元素字段
         * _val 元素显示文本
         * _x 元素在窗体内的横坐标
         * _y 元素在窗体内的纵坐标
         * _order 元素序号
         * _differX 元素在输出设备上相对横向偏移量
         * _differY 元素在输出设备上相对纵向偏移量
         * _fontSize 元素字号
         * _fontColor 元素字体颜色
         * _fontFamily 元素字体
         * _align 元素对齐方式
         * _bold 元素加粗
         * _italic 元素斜体
         * _underline 元素下划线
         * _width 元素的宽度
         * _height 元素的高度
         * _col 所属列所在位置
         * _pos 行列坐标
         * _preMax 上一列最大宽度
         * 
         */
        mPar: function (_id, _filed, _val, _x, _y, _order, _differX, _differY, _fontSize, _fontColor, _fontFamily, _align, _bold, _italic, _underline, _width, _height, _col, _pos, _preMax) {
            this.id = _id;
            this.filed = _filed;
            this.val = _val;
            this.x = _x ? _x : 0;
            this.y = _y ? _y : 0;
            this.width = _width ? 24 : _width;
            this.height = _height ? 24 : _height;
            this.order = _order ? _order : 0;
            this.differX = _differX ? _differX : 0;
            this.differY = _differY ? _differY : 0;
            this.fontSize = _fontSize;
            this.fontColor = _fontColor;
            this.fontFamily = _fontFamily;
            this.align = _align;
            this.bold = _bold;
            this.italic = _italic;
            this.underline = _underline;
            this.col = _col;
            this.pos = _pos;
            this.preMax = _preMax;
        },
        /**
         * 
         * 模板函数 ------>构造模板对象
         * 
         * _name 模板名称
         * _height 模板高度
         * _width 模板宽度
         * _dx 整体横向偏移量
         * _dy 整体纵向偏移量
         * _fontSize 整体字号
         * _fontColor 整体字体颜色
         * _fontFamily 整体字体
         * _eles 模板元素集合
         * 
         */
        tmp: {
            printId: 0,
            isDel: "",
            name: 'xxx_lpp',
            height: 320,
            width: 420,
            dx: 0,
            dy: 0,
            fontSize: 12,
            fontColor: '#000',
            fontFamily: 'tahoma, "Microsoft Yahei", "SimSun", sans-serif',
            eles: [],
            bgi: [],
        },
        /**
         * 背景图对象
         */
        bgi: function (_id, _name, _t, _l, _w, _h, _url, _level) {
            this.id = _id;
            this.name = _name;
            this.t = _t;
            this.l = _l;
            this.w = _w;
            this.h = _h;
            this.url = _url;
            this.level = _level;
        },
        /**
         * 数据集合
         */
        mdl: [],
        /**
         * 图片集合
         */
        imgs: [],
        add: function (obj) {
            this.imgs.push(obj);
        },
        remove: function (id) {
            var _this = this;
            _this.imgs = _.filter(_this.imgs, function (o) {
                return o.id !== id;
            })
            _this.reSort();
        },
        update: function (data) {
            var _this = this;
            var obj = _.find(_this.imgs, { id: data.id });
            Object.assign(obj, data);
            _this.imgs = _.filter(_this.imgs, function (o) {
                return o.id !== data.id;
            })
            _this.imgs.push(obj);
        },
        preMax: {},
        addPre: function (data) {
            var _this = this;
            Object.assign(_this.preMax, data);
        },
        delPre: function (key) {
            if (!this._preMax.hasOwnProperty(key)) {
                return;
            }
            delete this._preMax[key]
        },
        sumPre: function () {
            var _this = this;
            var sum = 0;
            _.forEach(_this.preMax, function (v, k) {
                sum += v;
            })
            return sum;
        },
        curPre: function (col) {
            var _this = this;
            var sum = 0;
            for (let index = 0; index < col; index++) {
                sum += _this.preMax[index + 1];
            }
            return sum;
        },
        addData: function (data) {
            this.mdl.push(data);
        },
        delData: function (id) {
            var _this = this;
            _this.mdl = _.filter(_this.mdl, function (o) {
                return o.id !== id;
            })
            _this.reSort();
        },
        delDataByFiled: function (filed) {
            var _this = this;
            _this.mdl = _.filter(_this.mdl, function (o) {
                return o.filed !== filed;
            })
            _this.reSort();
        },
        updData: function (data) {
            var _this = this;
            var obj = _.find(_this.mdl, { id: data.id });
            Object.assign(obj, data);
            _this.mdl = _.filter(_this.mdl, function (o) {
                return o.id !== data.id;
            })
            _this.mdl.push(obj);
        },
        updDataAll: function (data) {
            var _this = this;
            _.forEach(_this.mdl, function (o) {
                Object.assign(o, data);
            })
        },
        delStr: function (str) {
            return parseInt(str.replace(/px/g, ""));
        },
        reSort: function () {
            var _this = this;
            // _this.mdl = _.sortBy(_this.mdl, ['order']);
            let curaddTop = 0;
            let curaddLeft = 0;
            _this.preMax = {};
            _this.reCol({ container: document.getElementById('a_con_template') }, _this.mdl);
            var curcol = 0;
            _.forEach(_this.mdl, function (v, k) {
                if ((v.col === curcol && k === 0) || (v.col !== curcol)) {
                    curaddTop = _this.mData_global.first_top;
                    curcol = v.col;
                } else {
                    curaddTop += _this.mData_global.interval_y + parseInt(v.height);
                }
                if (v.col == 0) {
                    curaddLeft = _this.mData_global.first_left;
                } else {
                    curaddLeft = _this.mData_global.interval_x * v.col + _this.curPre(v.col) + _this.mData_global.first_left;
                }
                _this.updData({ id: v.id, x: curaddLeft, y: curaddTop });
                $("#" + v.id).css({ top: curaddTop, left: curaddLeft })
            });
        },
        reCol: function (_that, data) {
            var _this = this;
            var contHeight = $(_that.container).height();
            var sumEh = 0;
            var cc = 0;
            var tmp = [];
            for (let index = 0; index < data.length; index++) {
                const d = data[index];
                if (index === 0) {
                    sumEh += d.height;
                } else {
                    sumEh += d.height + _this.mData_global.interval_y;
                }
                if (sumEh + _this.mData_global.first_top >= contHeight) {
                    sumEh = d.height;
                    cc++;
                    _this.colMax(tmp, cc);
                    tmp = [];
                }
                _this.mdl[index].col = cc;
                tmp.push(_this.mdl[index]);
            }
            return cc;
        },
        colMax: function (data, c) {
            var _this = this;
            var _data = _.sortBy(data, function (o) {
                return o.width;
            });
            _this.preMax[c] = _data[_data.length - 1].width;
        },
        calThisTop: function (data, col) {
            var curtop = 0;
            data = _.filter(data, function (o) {
                return o.col === col;
            })
            for (let index = 0; index < data.length - 1; index++) {
                const item = data[index];
                curtop += item.height;
            }
            return { t: curtop, c: data.length - 1 };
        },
        getCol: function (_that, data) {
            var _this = this;
            var contHeight = $(_that.container).height();
            var sumEh = 0;
            var cc = 1;
            var lastObj = _this.mdl[_this.mdl.length - 1];
            while (_this.hasObj(data, cc)) {
                cc++;
            }
            data = _.filter(_this.mdl, function (o) {
                return o.col === cc - 1;
            })

            for (let index = 0; index < data.length; index++) {
                const d = data[index];
                if (index === 0) {
                    sumEh += d.height;
                } else {
                    sumEh += d.height + _this.mData_global.interval_y;
                }
            }
            if (contHeight < sumEh + _this.mData_global.first_top + lastObj.width + _this.mData_global.interval_y)
                return cc;
            return cc - 1;
        },
        getMaxW: function (data, col, prop) {
            var _this = this;
            data = _.filter(data, function (o) {
                return o.col === col;
            });
            var temp;
            var flag;
            for (let i = 0; i < data.length - 1; i++) {
                flag = false;
                for (let j = data.length - 1; j > i; j--) {
                    if (data[j][prop] < data[j - 1][prop]) {
                        temp = data[j];
                        data[j] = data[j - 1];
                        data[j - 1] = temp;
                        flag = true;
                    }
                }
                if (!flag) break;
            }
            _this.addPre({
                [col]: data[data.length - 1].width
            });
            return data;
        },
        hasObj: function (data, col) {
            return _.find(data, { col: col })
        }
    }
    if (mDataInit.editTmp.printId) {
        mData.tmp = mDataInit.editTmp;
        mData.imgs = JSON.parse(mDataInit.editTmp.bgi);
    }
    return mData;
})())