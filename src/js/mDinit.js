function createid() {
    return 'm_' + (new Date()).getTime();
}
(function(doc) {
    function getEle(tag) {
        return doc.createElement(tag);
    }
    const data = [{
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

    }]

    function initDom(data) {
        var _this = this;




        var mDrag_outter_wrap = getEle('div');
        mDrag_outter_wrap.className = 'mDrag_outter_wrap';
        var a_ope = getEle('div');
        a_ope.className = 'a_ope';
        var saveBtn = getEle('div');
        saveBtn.className = 'a_ope_btn a_ope_btn_save saveBtn';
        saveBtn.innerHTML = '保存模板';
        var a_ope_btn_change = getEle('div');
        a_ope_btn_change.className = 'a_ope_btn a_ope_btn_change';
        a_ope_btn_change.innerHTML = '添加图片<input type="file" name="file" accept="image/*" id="backgroundFile">';
        a_ope.append(saveBtn);
        a_ope.append(a_ope_btn_change);


        var a_sty = getEle('div');
        a_sty.className = 'a_sty';
        var a_sty_lF = getEle('div');
        a_sty_lF.className = 'a_sty_lF';
        var fontHtml = '';
        var fontHtml2 = '';
        for (let index = 0; index < mDataInit.fontFamilyList.length; index++) {
            const item = mDataInit.fontFamilyList[index];
            fontHtml += '<li class="font_f" style="font-family:' + item + '">' + item + '</li>';
            fontHtml2 += '<li class="DFL_item" style="font-family:' + item + '">' + item + '</li>'
        }
        var fontSizeHtml = '';
        var fontSizeHtml2 = '';
        for (let index = 0; index < mDataInit.fontSizeList.length; index++) {
            const item = mDataInit.fontSizeList[index];
            fontSizeHtml += '<li class="font_t" style="font-size:' + item + 'px">' + item + '</li>';
            fontSizeHtml2 += '<li class="DFL_item_size" style="font-size:' + item + 'px;height: auto;">' + item + '</li>';
        }
        a_sty_lF.innerHTML = `<label for="" style="margin-left:0;">模板名称：
            </label><input type="text" name="" id="mDrag_tmpn">
            <label for="">模板尺寸：宽</label>
            <input class="mDrag_tmph" type="text" name="" id="mDrag_tmpw" style="width:30px;"> ✖高
            <input class="mDrag_tmpw" type="text" name="" id="mDrag_tmph" style="width:30px;">
            <label for="">偏移调整：</label>
            <span class="mDrag_arrow mDrag_up arrow arrow-up"></span>
            <input type="text" name="" id="mDrag_hdx" style="width:30px;" value="0">
            <span class="mDrag_arrow mDrag_down arrow arrow-down"></span>
            <span class="mDrag_arrow mDrag_left arrow arrow-left" style="margin-left:20px;"></span>
            <input type="text" name="" id="mDrag_wdy" style="width:30px;" value="0">
            <span class="mDrag_arrow mDrag_right arrow arrow-right"></span>
            <label for="">字号：</label>
            <span class="mDrag_font" style="width:80px">
            <span id="mDrag_f_s" class="mDrag_font_text">20</span><span class="mDrag_font_icon"></span>
            <ul class="mDrag_font_droplist" style="display:none;">` + fontSizeHtml + `</ul>
            </span><label for="">字体：</label><span class="mDrag_font" style="width:300px"><span id="mDrag_f_t" class="mDrag_font_text">宋体</span><span class="mDrag_font_icon"></span>
            <ul class="mDrag_font_droplist" style="display:none;">
            ` + fontHtml + `</ul></span>`;

        var a_sty_2F = getEle('div');
        a_sty_2F.className = 'a_sty_2F';
        a_sty_2F.innerHTML = '<label for="" style="margin-left:0;">横向间距(元素)：</label>' +
            '<input type="text" name="" id="mDrag_spert_x"><label for="">纵向间距(元素)：</label><input type="text" name="" id="mDrag_spert_y">' +
            '<label for="">第一项的上边距(元素)：</label><input type="text" name="" id="mDrag_ft"><label for="">第一项的左边距(元素)：</label><input type="text" name="" id="mDrag_fl">' +
            '<label for="">最大宽度(元素)：</label><input type="text" name="" id="mDrag_max"><label for="">最小宽度(元素)：</label><input type="text" name="" id="mDrag_min">';

        var a_sty_2F_bg = getEle('div');
        a_sty_2F_bg.className = 'a_sty_2F';
        a_sty_2F_bg.innerHTML = `<label for="" style="margin-left:0;">横向边距(图片)：</label>
        <input type="text" name="" id="bg_mDrag_spert_x"><label for="">纵向边距(图片)：</label>
        <input type="text" name="" id="bg_mDrag_spert_y"><label for="">宽(图片)：</label>
        <input type="text" name="" id="bg_mDrag_spert_w"><label for="">高(图片)：</label>
        <input type="text" name="" id="bg_mDrag_spert_h"><label for="">层级(图片)：</label>
        <input type="text" name="" id="bg_mDrag_spert_l">
        <div class="a_ope_btn a_ope_btn_save sortBtn" style="margin-left:30px;">重新排序</div>`;
        a_sty.append(a_sty_lF);
        a_sty.append(a_sty_2F);
        a_sty.append(a_sty_2F_bg);

        var a_sty_3F = getEle('div');
        a_sty_3F.className = 'a_sty_3F';
        var mDrag_elwrap = getEle('div');
        mDrag_elwrap.className = 'mDrag_elwrap';
        mDrag_elwrap.innerHTML = `<span id="mDrag_mmm_font" class="mDrag_el_item mDrag_el_text" title="字体样式"><span id="mDrag_do_gone_boom" class="mDrag_mmm_font_span">字体</span>
        <div class="mDrag_fontdropdownlist">
            <div class="DFL_wrap">
                <ul class="DFL_boe">
                    ` + fontHtml2 + `
                </ul>
            </div>
        </div>
        </span>
        <span id="mDrag_mmm_size" class="mDrag_el_item mDrag_el_text" title="字体大小"><span id="mDrag_do_gone_bone">大小</span>
        <div class="mDrag_fontdropdownlist">
            <div class="DFL_wrap">
                <ul class="DFL_boe">
                    ` + fontSizeHtml2 + `
                </ul>
            </div>
        </div>
        </span>
        <span class="mDrag_el_item mDrag_el_split">&nbsp;</span>
        <span id="mDrag_el_color" class="mDrag_el_item mDrag_el_color" title="字体颜色">&nbsp;
                <span class="mDrag_el_item mDrag_el_icon_f">&nbsp;<span class="mDrag_el-colorlump"></span></span>
        <span class="mDrag_el_item mDrag_el_arr_f"></span>
        </span>
        <span class="mDrag_el_item mDrag_el_blod" title="加粗">&nbsp;</span>
        <span class="mDrag_el_item mDrag_el_italic" title="斜体">&nbsp;</span>
        <span class="mDrag_el_item mDrag_el_underline" title="下划线">&nbsp;</span>
        <span class="mDrag_el_item mDrag_el_split">&nbsp;</span>
        <span class="mDrag_el_item mDrag_el_justify mDrag_el_justifyleft" data-v="left" title="向左对齐">&nbsp;</span>
        <span class="mDrag_el_item mDrag_el_justify mDrag_el_justifycenter" data-v="center" title="剧中对齐">&nbsp;</span>
        <span class="mDrag_el_item mDrag_el_justify mDrag_el_justifyright" data-v="right" title="向右对齐">&nbsp;</span>
        <span class="mDrag_el_item mDrag_el_justify mDrag_el_justifybetween" data-v="center" title="两端对齐">&nbsp;</span>
        <span class="mDrag_el_item mDrag_el_justify mDrag_el_split">&nbsp;</span>`;
        a_sty_3F.append(mDrag_elwrap);

        mDrag_outter_wrap.append(a_ope);
        mDrag_outter_wrap.append(a_sty);
        doc.body.append(mDrag_outter_wrap);
        doc.body.append(a_sty_3F);

        var boo = getEle('div');
        boo.className = 'a_con';
        boo.id = 'mDrag_dymic_parm';

        var boc = getEle('div');
        boc.className = 'a_con_template';
        boc.id = 'a_con_template';
        boc.innerHTML = '';
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
            // for (let i = 0; i < item.data.length; i++) {
            //     const sub = item.data[i];
            //     htmlText += '<li class="acp_itemwrap"><label id="acp_' + sub.filed + '" class="acp_cb checkbox-pretty inline checkbox" data-filed="' + sub.filed + '" data-val="' + sub.value + '"><span>' + sub.value + '</span></label></li>'
            // }
            _.forEach(item.data, function(m, n) {
                htmlText += '<li class="acp_itemwrap"><label id="acp_' + n + '" class="acp_cb checkbox-pretty inline checkbox" data-filed="' + n + '" data-val="' + m + '"><span>' + m + '</span></label></li>'
            })
            htmlText += '</ul>';
        }
        htmlText += '</div>';
        return htmlText;
    }

    initDom(data);
    $(".print-field-container").mCustomScrollbar();
})(document)