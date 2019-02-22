(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory : global.addMPPI = factory
})(this, (function (doc, $) {
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
        if (par.id) {
            this.show(par);
        } else {
            this.init();
        }
    }

    addMPPI.prototype.show = function (par) {
        var _this = this;
        const iid = 's' + par.id;
        this.tag = getEle('div');
        this.tag.className = 'dymic';
        $(this.tag).css({ 'min-width': mData.mData_global.ele_min_width, 'max-width': mData.mData_global.ele_max_width });
        this.tag.id = par.id;
        this.childTag = getEle('div');
        this.childTag.className = 'dymic_txt';
        this.childTag.innerHTML = '<span class="filed" id="va' + iid + '">' + this.val + '</span><span class="acf_icon"><img id="' + iid + '" src="/img/print/remove.png" alt=""></span>';
        this.tag.append(this.childTag);
        this.container.append(this.tag);
        new mDrag({ id: par.id, data: par });
        var curid = "#" + _this.tag.id;
        $(curid).css({ 'top': parseInt(par.y), 'left': parseInt(par.x) });
        document.getElementById(iid).addEventListener('click', function (evt) {
            document.getElementById(_this.tag.id).remove();
            var _obj = _.filter(mData.mdl, { id: _this.tag.id });
            var checkbox = document.getElementById('acp_' + _obj[0].filed);
            if (checkbox) {
                checkbox.classList.remove('checked');
            }
            mData.delData(_this.tag.id);
        });
        document.getElementById(_this.tag.id).addEventListener('click', function (evt) {
            var labs = document.getElementsByClassName('dymic');
            for (let index = 0; index < labs.length; index++) {
                labs[index].className = 'dymic';
            }
            this.className = 'dymic active';
        })
    }

    addMPPI.prototype.init = function () {
        var _this = this;
        const mid = createid();
        const iid = 's' + mid;
        this.tag = getEle('div');
        this.tag.className = 'dymic';
        $(this.tag).css({ 'min-width': mData.mData_global.ele_min_width, 'max-width': mData.mData_global.ele_max_width });
        this.tag.id = mid;
        this.childTag = getEle('div');
        this.childTag.className = 'dymic_txt';
        this.childTag.innerHTML = '<span class="filed" id="va' + iid + '">' + this.val + '</span><span class="acf_icon"><img id="' + iid + '" src="../img/print/remove.png" alt=""></span>';
        this.tag.append(this.childTag);
        this.container.append(this.tag);
        this.data.id = this.tag.id;
        new mDrag({ id: _this.tag.id, data: _this.data });
        var curid = "#" + _this.data.id;
        var curh = $(curid).outerHeight();
        var curw = $(curid).outerWidth();
        var cur_x = 0;
        var cur_y = 0;
        var curs = 0;
        var curcol = 0;
        mData.updData({ id: _this.data.id, height: curh, width: curw })
        if (mData.mdl.length > 1) {
            curcol = mData.reCol(_this, mData.mdl);
        }
        mData.updData({ id: _this.data.id, col: curcol })
        if (curcol === 0) {
            cur_x = mData.mData_global.first_left;
        } else {
            cur_x = mData.mData_global.interval_x * curcol + mData.sumPre() + mData.mData_global.first_left;
        }
        var eetop = mData.calThisTop(mData.mdl, curcol);
        if (mData.mdl.length > 1) {
            curs = mData.mdl[mData.mdl.length - 2].order + 1;
            cur_y = eetop.t + mData.mData_global.interval_y * eetop.c + mData.mData_global.first_left;
        } else {
            curs = 0;
            cur_y = mData.mData_global.first_top;
        }
        var pos = _.filter(mData.mdl, function (o) {
            return o.col === curcol;
        });
        var pos_sort = pos.length;
        mData.updData({ id: _this.data.id, x: cur_x, y: cur_y, pos: { col: curcol, row: pos_sort }, order: curs });
        $(curid).css({ 'top': cur_y, 'left': cur_x });
        document.getElementById(iid).addEventListener('click', function (evt) {
            document.getElementById(_this.tag.id).remove();
            var _obj = _.filter(mData.mdl, { id: _this.tag.id });
            var checkbox = document.getElementById('acp_' + _obj[0].filed);
            if (checkbox) {
                checkbox.classList.remove('checked');
            }
            mData.delData(_this.tag.id);
        });
        document.getElementById(_this.tag.id).addEventListener('click', function (evt) {
            var labs = document.getElementsByClassName('dymic');
            for (let index = 0; index < labs.length; index++) {
                labs[index].className = 'dymic';
            }
            this.className = 'dymic active';
        })
    }
    return addMPPI;
})(document, jQuery));