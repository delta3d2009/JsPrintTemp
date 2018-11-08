(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory : global.addMPPI = factory
})(this, (function(doc) {
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
        this.data = new mData.mPar(this.filed, this.val, this.x, this.y, this.order);
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
        document.getElementById(iid).addEventListener('click', function(evt) {
            this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);
            mData.delData(_this.tag.id);
        })
    }
    return addMPPI;
})(document));