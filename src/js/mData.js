(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : global.mData = factory()
})(this, (function() {
    var mData = {
        mPar: function(_id, _filed, _val, _x, _y, _order, _differX, _differY) {
            this.id = _id;
            this.filed = _filed;
            this.val = _val;
            this.x = _x ? _x : 0;
            this.y = _y ? _y : 0;
            this.order = _order ? _order : 0;
            this.differX = _differX ? _differX : 0;
            this.differY = _differY ? _differY : 0;
        },
        mdl: [],
        addData: function(data) {
            this.mdl.push(data);
        },
        delData: function(id) {
            var _this = this;
            console.log(id);

            _.filter(_this.mdl, function(o) {
                return o.id !== id;
            })
        },
        updData: function(data) {

        }
    }
    return mData;
}))