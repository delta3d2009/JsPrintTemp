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




        var mDrag_outter_wrap = getEle('div');
        mDrag_outter_wrap.className = 'mDrag_outter_wrap';
        var a_ope = getEle('div');
        a_ope.className = 'a_ope';
        var saveBtn = getEle('div');
        saveBtn.className = 'a_ope_btn a_ope_btn_save saveBtn';
        saveBtn.innerHTML = '保存模板';
        var a_ope_btn_change = getEle('div');
        a_ope_btn_change.className = 'a_ope_btn a_ope_btn_change';
        a_ope_btn_change.innerHTML = '更换背景图<input type="file" name="file" accept="image/*" id="backgroundFile">';
        a_ope.append(saveBtn);
        a_ope.append(a_ope_btn_change);


        var a_sty = getEle('div');
        a_sty.className = 'a_sty';
        var a_sty_lF = getEle('div');
        a_sty_lF.className = 'a_sty_lF';
        a_sty_lF.innerHTML = '<label for="" style="margin-left:0;">模板名称：' +
            '</label><input type="text" name="" id="mDrag_tmpn">' +
            '<label for="">模板尺寸：宽</label>' +
            '<input class="mDrag_tmph" type="text" name="" id="mDrag_tmpw" style="width:30px;"> ✖高' +
            '<input class="mDrag_tmpw" type="text" name="" id="mDrag_tmph" style="width:30px;">' +
            '<label for="">偏移调整：</label>' +
            '<span class="mDrag_arrow mDrag_up arrow arrow-up"></span>' +
            '<input type="text" name="" id="mDrag_hdx" style="width:30px;" value="0">' +
            '<span class="mDrag_arrow mDrag_down arrow arrow-down"></span>' +
            '<span class="mDrag_arrow mDrag_left arrow arrow-left" style="margin-left:20px;"></span>' +
            '<input type="text" name="" id="mDrag_wdy" style="width:30px;" value="0">' +
            '<span class="mDrag_arrow mDrag_right arrow arrow-right"></span>' +
            '<label for="">字体：</label>' +
            '<span class="mDrag_font" style="width:30px">' +
            '<span id="mDrag_f_s" class="mDrag_font_text">20</span><span class="mDrag_font_icon"></span>' +
            '<ul class="mDrag_font_droplist" style="display:none;">' +
            '<li class="font_t">15</li><li class="font_t">16</li><li class="font_t">17</li><li class="font_t">18</li><li class="font_t">19</li></ul>' +
            '</span><label for="">字号：</label><span class="mDrag_font" style="width:300px"><span id="mDrag_f_t" class="mDrag_font_text">宋体</span><span class="mDrag_font_icon"></span>' +
            '<ul class="mDrag_font_droplist" style="display:none;">' +
            '<li class="font_f">宋体</li><li class="font_f">新宋体</li><li class="font_f">黑体</li><li class="font_f">微软雅黑</li><li class="font_f">楷体</li></ul></span>';

        var a_sty_2F = getEle('div');
        a_sty_2F.className = 'a_sty_2F';
        a_sty_2F.innerHTML = '<label for="" style="margin-left:0;">横向间距：</label>' +
            '<input type="text" name="" id="mDrag_spert_x"><label for="">纵向间距：</label><input type="text" name="" id="mDrag_spert_y">' +
            '<label for="">第一项的上边距：</label><input type="text" name="" id="mDrag_ft"><label for="">第一项的左边距：</label><input type="text" name="" id="mDrag_fl">' +
            '<div class="a_ope_btn a_ope_btn_save sortBtn" style="margin-left:30px;">重新排序</div>';
        a_sty.append(a_sty_lF);
        a_sty.append(a_sty_2F);

        var a_sty_3F = getEle('div');
        a_sty_3F.className = 'a_sty_3F';
        var mDrag_elwrap = getEle('div');
        mDrag_elwrap.className = 'mDrag_elwrap';
        mDrag_elwrap.innerHTML = `<span id="mDrag_mmm_font" class="mDrag_el_item mDrag_el_text" title="字体样式"><span id="mDrag_do_gone_boom" class="mDrag_mmm_font_span">字体</span>
        <div class="mDrag_fontdropdownlist">
            <div class="DFL_wrap">
                <ul class="DFL_boe">
                    <li class="DFL_item" style="font-family:宋体">
                        宋体
                    </li>
                    <li class="DFL_item" style="font-family:黑体">
                        黑体
                    </li>
                    <li class="DFL_item" style="font-family:楷体">
                        楷体
                    </li>
                </ul>
            </div>
        </div>
        </span>
        <span id="mDrag_mmm_size" class="mDrag_el_item mDrag_el_text" title="字体大小"><span id="mDrag_do_gone_bone">大小</span>
        <div class="mDrag_fontdropdownlist">
            <div class="DFL_wrap">
                <ul class="DFL_boe">
                    <li class="DFL_item_size" style="font-size:12pxheight: auto;">
                        12
                    </li>
                    <li class="DFL_item_size" style="font-size:14px;height: auto;">
                        14
                    </li>
                    <li class="DFL_item_size" style="font-size:16px;height: auto;">
                        16
                    </li>
                    <li class="DFL_item_size" style="font-size:20px;height: auto;">
                        20
                    </li>
                    <li class="DFL_item_size" style="font-size:26px;height: auto;">
                        26
                    </li>
                    <li class="DFL_item_size" style="font-size:32px;height: auto;">
                        32
                    </li>
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
        boc.innerHTML = '<div class="act_bg"><img id="tmp_bg_action" src="./img/print/a.jpg" alt="" srcset=""> </div>';
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