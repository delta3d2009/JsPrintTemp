(function($) {
    document.addEventListener('click', function(evt) {
        if (evt.target.id !== 'mDrag_f_s') {
            $("#mDrag_f_s").siblings('.mDrag_font_droplist').hide('slow');
        }
        if (evt.target.id !== 'mDrag_f_t') {
            $("#mDrag_f_t").siblings('.mDrag_font_droplist').hide('slow');
        }
        if (evt.target.id !== 'mDrag_do_gone_bone') {
            $("#mDrag_do_gone_bone").siblings('.mDrag_fontdropdownlist').hide('slow');
        }
        if (evt.target.id !== 'mDrag_do_gone_boom') {
            $("#mDrag_do_gone_boom").siblings('.mDrag_fontdropdownlist').hide('slow');
        }
        if (evt.target.id !== 'mDrag_f_i') {
            $("#mDrag_f_i").siblings('.mDrag_font_droplist').hide('slow');
        }
    })
    var spans = document.getElementsByClassName('mDrag_arrow');
    for (let index = 0; index < spans.length; index++) {
        const e = spans[index];
        e.addEventListener('click', function(evt) {
            if (this.classList.contains('arrow-up')) {
                cal('mDrag_hdx', 'x', true);
            } else if (this.classList.contains('arrow-down')) {
                cal('mDrag_hdx', 'x', false);
            } else if (this.classList.contains('arrow-left')) {
                cal('mDrag_wdy', 'y', false);
            } else if (this.classList.contains('arrow-right')) {
                cal('mDrag_wdy', 'y', true);
            }
        })
    }
    if (mDataInit.editTmp.printId) {
        mData.tmp.bgi = JSON.parse(mData.tmp.bgi);
        for (let index = 0; index < mData.tmp.bgi.length; index++) {
            const item = mData.tmp.bgi[index];
            var img = new Image();
            img.src = item.url;
            imgloadcomplete(img).done(function(b64d) {
                var div = document.createElement('div');
                if (index == 0) {
                    div.className = 'act_bg';
                } else {
                    div.className = 'act_bg active';
                }
                div.id = item.id;
                var img1 = new Image();
                img1.src = b64d;
                div.appendChild(img1);
                document.getElementById('a_con_template').appendChild(div);
                $(div).css({width:item.w,top:item.t,left:item.l});
            })
        }
        mData.tmp.eles = JSON.parse(mData.tmp.eles);
        for (let index = 0; index < mData.tmp.eles.length; index++) {
            const item = mData.tmp.eles[index];
            item.container = "a_con_template";
            new addMPPI(item);
            var checkbox = document.getElementById('acp_' + item.filed);
            if (checkbox) {
                checkbox.classList.add('checked');
            }
        }

    }

    function def() {
        $('#mDrag_tmpn').val(mData.tmp.name);
        $('#mDrag_tmpw').val(mData.tmp.width);
        $('#mDrag_tmph').val(mData.tmp.height);
        $('#mDrag_hdx').val(mData.tmp.dx);
        $('#mDrag_wdy').val(mData.tmp.dy);
        $('#mDrag_f_s').text(mData.tmp.fontSize);
        $('#mDrag_f_t').text(mData.tmp.fontFamily);
        $('#mDrag_spert_x').val(mData.mData_global.interval_x);
        $('#mDrag_spert_y').val(mData.mData_global.interval_y);
        $('#mDrag_ft').val(mData.mData_global.first_top);
        $('#mDrag_fl').val(mData.mData_global.first_left);
        $('#a_con_template').width(mData.tmp.width);
        $('#a_con_template').height(mData.tmp.height);
    }
    def();
    document.getElementById('mDrag_tmpn').addEventListener('keyup', function(evt) {
        if (this.value) {
            mData.tmp.name = this.value;
        }
    })

    document.getElementById('mDrag_tmph').addEventListener('keyup', function(evt) {
        if (parseInt(this.value) !== 0) {
            document.getElementById('a_con_template').style.height = this.value + 'px';
            mData.tmp.height = parseInt(this.value);
        }
    })

    document.getElementById('mDrag_tmpw').addEventListener('keyup', function(evt) {
        if (parseInt(this.value) !== 0) {
            document.getElementById('a_con_template').style.width = this.value + 'px';
            mData.tmp.width = parseInt(this.value);
        }
    })

    $('.mDrag_font').on('click', function(evt) {
        $(this).children('.mDrag_font_droplist').toggle('active');
    })

    $('.font_t').on('click', function(evt) {
        $(this).parent().siblings('.mDrag_font_text').text($(this).text());
        mData.tmp.fontSize = $(this).text();
    })

    $(".delBgimg").on('click', function(evt) {
        var acti = $(".act_bg.active");
        if (acti) {
            var id = acti.attr('id');
            document.getElementById(id).remove();
            document.getElementById('name_' + id).remove();
            document.getElementById('mDrag_f_i').innerHTML = '';
            mData.remove(id);
        }
    })

    $('.font_f').on('click', function(evt) {
        $(this).parent().siblings('.mDrag_font_text').text($(this).text());
        if ($(this).hasClass('imgItem')) {
            var id = $(this).attr('id').replace(/name_/, '');
            $(".act_bg").removeClass('active');
            document.getElementById(id).classList.add('active');
        } else {
            mData.tmp.fontFamily = $(this).text();
        }
    })

    document.getElementById('mDrag_spert_x').addEventListener('keyup', function(evt) {
        if (this.value) {
            mData.mData_global.interval_x = parseInt(this.value);
        } else {
            mData.mData_global.interval_x = 0;
        }
    })
    document.getElementById('bg_mDrag_spert_x').addEventListener('keyup', function(evt) {
        var id = $(".act_bg.active").attr('id');
        if (this.value) {
            $(".act_bg.active").css({ 'left': parseInt(this.value) })
            var l = parseInt(this.value);
            mData.update({ id: id, l: l })
        } else {
            $(".act_bg.active").css({ 'left': 0 })
            mData.update({ id: id, l: 0 })
        }
    })
    document.getElementById('bg_mDrag_spert_w').addEventListener('keyup', function(evt) {
        var id = $(".act_bg.active").attr('id');
        if (this.value) {
            $(".act_bg.active").css({ 'width': parseInt(this.value) })
            var w = parseInt(this.value);
            mData.update({ id: id, w: w })
        } else {
            $(".act_bg.active").css({ 'width': mData.tmp.width })
            mData.update({ id: id, w: mData.tmp.width })
        }
    })
    document.getElementById('bg_mDrag_spert_h').addEventListener('keyup', function(evt) {
        var id = $(".act_bg.active").attr('id');
        if (this.value) {
            $(".act_bg.active").css({ 'height': parseInt(this.value) })
            var h = parseInt(this.value);
            mData.update({ id: id, h: h })
        } else {
            $(".act_bg.active").css({ 'height': mData.tmp.height })
            mData.update({ id: id, w: mData.tmp.height })
        }
    })
    document.getElementById('bg_mDrag_spert_y').addEventListener('keyup', function(evt) {
        var id = $(".act_bg.active").attr('id');
        if (this.value) {
            $(".act_bg.active").css({ 'top': parseInt(this.value) })
            var t = parseInt(this.value);
            mData.update({ id: id, t: t })
        } else {
            $(".act_bg.active").css({ 'top': 0 })
            mData.update({ id: id, t: 0 })
        }
    })

    document.getElementById('bg_mDrag_spert_l').addEventListener('keyup', function(evt) {
        var id = $(".act_bg.active").attr('id');
        if (this.value) {
            $(".act_bg.active").css({ 'z-index': parseInt(this.value) })
            var level = parseInt(this.value);
            mData.update({ id: id, level: level })
        } else {
            $(".act_bg.active").css({ 'z-index': 0 })
            mData.update({ id: id, level: 0 })
        }
    })

    document.getElementById('mDrag_ft').addEventListener('keyup', function(evt) {
        if (this.value) {
            mData.mData_global.first_top = parseInt(this.value);
        } else {
            mData.mData_global.first_top = 0;
        }
    })

    document.getElementById('mDrag_fl').addEventListener('keyup', function(evt) {
        if (this.value) {
            mData.mData_global.first_left = parseInt(this.value);
        } else {
            mData.mData_global.first_left = 0;
        }
    });

    $(".mDrag_el_color").bigColorpicker(function(el, color) {
        if ($('.dymic').hasClass('active')) {
            var id = $('.dymic.active').attr('id');
            $('#vas' + id).css({ 'color': color });
            mData.updData({ id: id, fontColor: color });
        }
    });

    $('.show-print-items').on('click', function(evt) {
        if ($(this).children('.sui-icon').hasClass('icon-double-angle-up')) {
            $(this).children('.sui-icon').removeClass('icon-double-angle-up');
            $(this).children('.sui-icon').addClass('icon-double-angle-down');
            $(this).parent().parent().animate({
                height: "28px"
            }, 100);
        } else {
            $(this).children('.sui-icon').removeClass('icon-double-angle-down');
            $(this).children('.sui-icon').addClass('icon-double-angle-up');
            $(this).parent().parent().animate({
                height: "350px"
            }, 200);
        }
    })

    $(".separator-title").on('click', function(params) {
        if ($(this).children('.sui-icon').hasClass('icon-double-angle-up')) {
            $(this).children('.sui-icon').removeClass('icon-double-angle-up');
            $(this).children('.sui-icon').addClass('icon-double-angle-down');
            $(this).parent().animate({
                height: "25px"
            }, 200);
        } else {
            var a = $(this).siblings('.acp_itemwrap');
            var h = (a.length + 1) * 24;
            $(this).children('.sui-icon').removeClass('icon-double-angle-down');
            $(this).children('.sui-icon').addClass('icon-double-angle-up');
            $(this).parent().animate({
                height: h + "px"
            }, 200);
        }
    })

    $('.saveBtn').on('click', function(evt) {
        mData.tmp.eles = mData.mdl;
    })

    $('.sortBtn').on('click', function(evt) {
        mData.mdl = _.sortBy(mData.mdl, ['order']);
        let curaddTop = 0;
        let curaddLeft = 0;
        _.forEach(mData.mdl, function(v, k) {
            if (k == 0) {
                curaddTop = mData.mData_global.first_top;
            } else {
                curaddTop += mData.mData_global.interval_y + parseInt(v.height);
            }
            if (v.col == 1) {
                curaddLeft = mData.mData_global.first_left;
            }
            mData.updData({ id: v.id, x: curaddLeft, y: curaddTop });
            $("#" + v.id).css({ top: curaddTop, left: curaddLeft })
        });
    })

    function appendImgList(id, text) {
        var li = document.createElement('li');
        li.id = 'name_' + id;
        li.className = 'font_f imgItem';
        li.innerHTML = text;
        document.getElementById('mDrag_vvv_imglist').appendChild(li);
        document.getElementById(li.id).addEventListener('click', function(evt) {
            $(this).parent().siblings('.mDrag_font_text').text($(this).text());
            var id = $(this).attr('id').replace(/name_/, '');
            $(".act_bg").removeClass('active');
            document.getElementById(id).classList.add('active');
        })
    }


    $("#backgroundFile").change(function(evt) {
        var file = this.files[0];
        var reader = new FileReader();
        var div = document.createElement('div');
        if (mData.imgs.length > 0) {
            div.className = 'act_bg';
        } else {
            div.className = 'act_bg active';
        }
        div.id = createid();
        var img = new Image();
        var imgFile;
        reader.onload = function(e) {
            imgFile = e.target.result;
            img.src = imgFile;
            div.appendChild(img);
            document.getElementById('a_con_template').appendChild(div);
            mData.add(new mData.bgi(div.id, file.name, 0, 0, mData.tmp.height, mData.tmp.width, '', 0));
            appendImgList(div.id, file.name);
        };
        reader.readAsDataURL(file);
    });

    $("#mDrag_mmm_font,#mDrag_mmm_size").on('click', function(evt) {
        $(this).children(".mDrag_fontdropdownlist").toggle('active');
    });

    $(".DFL_item").on('click', function(evt) {
        var ft = $(this).css('font-family');
        if ($('.dymic').hasClass('active')) {
            $('.dymic.active').css({ 'font-family': ft });
            var id = $('.dymic.active').attr('id');
            mData.updData({ id: id, fontFamily: ft });
        }
    })

    $(".DFL_item_size").on('click', function(evt) {
        var ft = $(this).css('font-size');
        if ($('.dymic').hasClass('active')) {
            $('.dymic.active').css({ 'font-size': ft });
            var id = $('.dymic.active').attr('id');
            mData.updData({ id: id, fontSize: parseInt(ft.replace(/px/g, '')) });
        }
    })

    $('.mDrag_el_blod').on('click', function(evt) {
        if ($('.dymic').hasClass('active')) {
            if ($('.dymic.active').css('font-weight') === '400') {
                $('.dymic.active').css({ 'font-weight': 'bold' });
                var id = $('.dymic.active').attr('id');
                mData.updData({ id: id, bold: 1 });
            } else {
                $('.dymic.active').css({ 'font-weight': 'normal' });
                var id = $('.dymic.active').attr('id');
                mData.updData({ id: id, bold: 0 });
            }
        }
    })

    $('.mDrag_el_italic').on('click', function(evt) {
        if ($('.dymic').hasClass('active')) {
            if ($('.dymic.active').css('font-style') === 'normal') {
                $('.dymic.active').css({ 'font-style': 'italic' });
                var id = $('.dymic.active').attr('id');
                mData.updData({ id: id, italic: 1 });
            } else {
                $('.dymic.active').css({ 'font-style': 'normal' });
                var id = $('.dymic.active').attr('id');
                mData.updData({ id: id, italic: 0 });
            }
        }
    })

    $('.mDrag_el_underline').on('click', function(evt) {
        if ($('.dymic').hasClass('active')) {
            if ($('.dymic.active').css('text-decoration') === 'none solid rgb(0, 0, 0)') {
                $('.dymic.active').css({ 'text-decoration': 'underline' });
                var id = $('.dymic.active').attr('id');
                mData.updData({ id: id, underline: 1 });
            } else {
                $('.dymic.active').css({ 'text-decoration': 'none solid rgb(0, 0, 0)' });
                var id = $('.dymic.active').attr('id');
                mData.updData({ id: id, underline: 0 });
            }
        }
    })

    $('.act_bg').on('click', function(evt) {
        $('.act_bg').removeClass('active');
        $(this).addClass('active');
    })

    $('.mDrag_el_justify').on('click', function(evt) {
        var _this = this;
        if ($('.dymic').hasClass('active')) {
            var strsty = $(_this).attr('data-v');
            var id = $('.dymic.active').attr('id');
            $('.dymic.active').css({ 'text-align': strsty });
            if (strsty == 'center') {
                mData.updData({ id: id, align: 2 });
            } else if (strsty == 'right') {
                mData.updData({ id: id, align: 3 });
            } else {
                mData.updData({ id: id, align: 1 });
            }
        }
    })

    function cal(el, direct, isAdd) {
        var a = parseInt(getEl(el).value);
        if (isAdd) {
            a++;
        } else {
            a--;
        }
        getEl(el).value = a;
        if (direct === 'x') {
            mData.tmp.dx = a;
        } else {
            mData.tmp.dy = a;
        }
    }

    function getEl(el) {
        return document.getElementById(el);
    }

    function getBase64Image(img,width,height) {
        var canvas = document.createElement("canvas");
        canvas.width = width ? width : img.width;
        canvas.height = height ? height : img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        var dataURL = canvas.toDataURL();
        return dataURL;
    }

    function imgloadcomplete(img) {
        var def = $.Deferred();
        img.onload = function() {
            var b64d = getBase64Image(img);
            def.resolve(b64d);
        }
        return def;
    }

    var checkboxs = document.getElementsByClassName('acp_cb');
    for (let index = 0; index < checkboxs.length; index++) {
        const e = checkboxs[index];
        e.addEventListener('click', function() {
            var _this = this;
            if (this.classList.contains('checked')) {
                this.classList.remove('checked');
                var _obj = _.filter(mData.mdl, { filed: _this.getAttribute('data-filed') });
                document.getElementById(_obj[0].id).remove();
                mData.delDataByFiled(_this.getAttribute('data-filed'));
            } else {
                this.classList.add('checked');
                new addMPPI({ filed: _this.getAttribute('data-filed'), val: _this.getAttribute('data-val'), container: "a_con_template" });
            }
        })
    }
})(jQuery);