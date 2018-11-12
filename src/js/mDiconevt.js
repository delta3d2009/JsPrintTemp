(function($) {
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

    $('.font_f').on('click', function(evt) {
        $(this).parent().siblings('.mDrag_font_text').text($(this).text());
        mData.tmp.fontFamily = $(this).text();
    })

    document.getElementById('mDrag_spert_x').addEventListener('keyup', function(evt) {
        if (this.value) {
            mData.mData_global.interval_x = parseInt(this.value);
        } else {
            mData.mData_global.interval_x = 0;
        }
    })
    document.getElementById('mDrag_spert_y').addEventListener('keyup', function(evt) {
        if (this.value) {
            mData.mData_global.interval_y = parseInt(this.value);
        } else {
            mData.mData_global.interval_y = 0;
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
    // $("#mDrag_el_color").colorpicker({});

    document.getElementById('sortBtn').addEventListener('click', function(evt) {

    })
    $("#mDrag_mmm_font").on('click', function(evt) {
        $(".mDrag_fontdropdownlist").toggle('active');
    });

    $(".DFL_item").on('click', function(evt) {
        var ft = $(this).css('font-family');
        if ($('.dymic').hasClass('active')) {
            $('.dymic.active').css({ 'font-family': ft });
            var id = $('.dymic.active').attr('id');
            mData.updData({ id: id, fontFamily: ft });
        } else {
            $('.dymic').css({ 'font-family': ft })
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