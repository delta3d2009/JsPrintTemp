(function(doc) {
    function getEle(tag) {
        return doc.createElement(tag);
    }

    function createid() {
        return 'v_' + Math.random() * 10000000000000000;
    }
    const data = [{
        id: 1,
        title: '打印项目1',
        data: [
            { filed: 'aaa', value: '分1' },
            { filed: 'bbb', value: '分销2' },
            { filed: 'ccc', value: '分销商3' },
            { filed: 'ddd', value: '分销商商4' },
        ]
    }, {
        id: 1,
        title: '打印项目2',
        data: [
            { filed: 'eee', value: '项目商商商1' },
            { filed: 'fff', value: '项目商商商商2' },
            { filed: 'ggg', value: '项目商商商商商3' },
            { filed: 'hhh', value: '项目商商商商商商4' },
        ]
    }]

    function initDom(data) {
        var _this = this;




        // var a_sty = getEle('div');
        // a_sty.className = 'a_sty';
        // var a_sty_lF = getEle('div');
        // var a_sty_2F = getEle('div');



        var boo = getEle('div');
        boo.className = 'a_con';
        boo.id = 'mDrag_dymic_parm';

        var boc = getEle('div');
        boc.className = 'a_con_template';
        boc.id = 'a_con_template';
        boc.innerHTML = '<div class="act_bg"><img src="./img/print/a.jpg" alt="" srcset=""> </div>';
        boo.append(boc);



        this.tag = getEle('div');
        this.tag.className = 'a_con_params';
        this.tag.id = createid();
        this.childTag = getEle('div');
        this.childTag.className = 'acp_databox';
        this.childTag.id = 'acp_databox';
        this.childTag.innerHTML = createEle(data);
        this.tag.append(this.childTag);
        boo.append(this.tag);
        doc.body.append(boo);
    }

    function createEle(data) {
        var htmlText = '<div class="header">添加打印项目<a href="javascript:;" class="show-print-items" style="font-size:13px;color:#fff;float:right;"><i class="sui-icon icon-double-angle-up">收起</i></a>' +
            '</div><div class="print-field-container">';
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            htmlText += '<ul class="acp_datawrap"><li class="acp_itemwrap separator-title"><span>' + item.title + '</span><i class="sui-icon icon-double-angle-up"></i></li>';
            for (let i = 0; i < item.data.length; i++) {
                const sub = item.data[i];
                htmlText += '<li class="acp_itemwrap"><label id="acp_' + sub.filed + '" class="acp_cb checkbox-pretty inline checkbox" data-filed="' + sub.filed + '" data-val="' + sub.value + '"><span>' + sub.value + '</span></label></li>'
            }
            htmlText += '</ul>';
        }
        htmlText += '</div>';
        return htmlText;
    }

    initDom(data);
})(document)