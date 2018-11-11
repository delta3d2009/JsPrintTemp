(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory : global.addMPPI = factory
})(this, (function(doc, $) {
    function getEle(tag) {
        return doc.createElement(tag);
    }

    function getE(id) {
        return doc.getElementById(id);
    }

    function addMPPI(par) {
        this.filed = par.filed;
        this.val = par.val;
        this.x = par.x ? par.x : 0;
        this.y = par.y ? par.y : 0;
        this.order = par.order ? par.order : 0;
        this.differX = par.differX ? par.differX : 0;
        this.differY = par.differY ? par.differY : 0;
        this.width = par.width;
        this.height = par.height;
        this.data = new mData.mPar('', this.filed, this.val, this.x, this.y, this.order);
        this.container = getE(par.container);
        this.init();
    }

    function createid() {
        return 'v_' + Math.random() * 10000000000000000;
    }

    addMPPI.prototype.init = function() {
        var _this = this;
        const iid = createid();
        this.tag = getEle('div');
        this.tag.className = 'dymic';
        this.tag.id = createid();
        this.childTag = getEle('div');
        this.childTag.className = 'dymic_txt';
        this.childTag.innerHTML = '<span class="filed">' + this.val + '</span><span class="acf_icon"><img id="' + iid + '" src="../img/print/remove.png" alt=""></span>';
        this.tag.append(this.childTag);
        this.container.append(this.tag);
        this.data.id = this.tag.id;
        new mDrag({ id: _this.tag.id, data: _this.data });
        var curid = "#" + _this.data.id;
        var curh = $(curid).height();
        var curw = $(curid).width();
        var cur_x = 0;
        var cur_y = 0;
        var curs = 0;
        var eetop = calThisTop(mData.mdl);
        if (mData.length > 1) {
            curs = mData.mdl[mData.mdl.length - 2].order + 1;
            // cur_x = mData.mdl[mData.mdl.length - 2].width + mData.mData_global.interval_x * (mData.mdl.length - 1);
            cur_y = eetop + mData.mData_global.interval_y * (mData.mdl.length - 1) + mData.mData_global.first_left;
        } else {
            curs = 0;
            cur_x = mData.mData_global.first_left;
            cur_y = mData.mData_global.first_top;
        }
        mData.updData({ id: _this.data.id, height: curh, width: curw, x: cur_x, y: cur_y, order: curs })
        $(curid).css({ 'top': cur_y, 'left': cur_x });
        document.getElementById(iid).addEventListener('click', function(evt) {
            document.getElementById(_this.tag.id).remove();
            var _obj = _.filter(mData.mdl, { id: _this.tag.id });
            document.getElementById('acp_' + _obj[0].filed).classList.remove('checked');
            mData.delData(_this.tag.id);
        });
        document.getElementById(_this.tag.id).addEventListener('click', function(evt) {
            var labs = document.getElementsByClassName('dymic');
            for (let index = 0; index < labs.length; index++) {
                labs[index].className = 'dymic';
            }
            this.className = 'dymic active';
        })
    }

    function calThisTop(data) {
        var curtop = 0;
        for (let index = 0; index < data.length - 1; index++) {
            const item = data[index];
            curtop += item.height;
        }
        return curtop;
    }
    return addMPPI;
})(document, jQuery));