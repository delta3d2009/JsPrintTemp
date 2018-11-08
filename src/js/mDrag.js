(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory : global.mDrag = factory
})(this, (function(doc) {
    function getEle(id) {
        return doc.getElementById(id);
    }

    function mDrag(par) {
        this.drag = getEle(par.id);
        this.data = par.data;
        mData.addData(this.data);
        this.move();
    }

    mDrag.prototype.move = function() {
        var _this = this;
        _this.drag.onmousedown  = function(e) {          
            var  e  = e || window.event;         
            var  diffX  = e.clientX  -  _this.drag.offsetLeft;          
            var  diffY  =  e.clientY -  _this.drag.offsetTop;                          
            if (typeof  _this.drag.setCapture != 'undefined') {                  
                _this.drag.setCapture();              
            }            
            doc.onmousemove = function(e)  {              
                var e  =  e  || window.event;            
                var  left = e.clientX - diffX;              
                var  top = e.clientY - diffY;   
                if (left < 0) {                  
                    left = 0;              
                } else  if (left  > _this.drag.parentNode.offsetWidth - _this.drag.offsetWidth) {
                    left  = _this.drag.parentNode.offsetWidth - _this.drag.offsetWidth;
                }              
                if (top < 0) {                  
                    top = 0;              
                } else  if (top  > _this.drag.parentNode.offsetHeight - _this.drag.offsetHeight) {
                    top  = _this.drag.parentNode.offsetHeight - _this.drag.offsetHeight;
                }            
                _this.drag.style.left = left + 'px';              
                _this.drag.style.top  = top  + 'px';          
            };          
            doc.onmouseup = function(e)  {             
                this.onmousemove  = null;              
                this.onmouseup  = null;             
                if (typeof  _this.drag.releaseCapture != 'undefined') { 
                    _this.drag.releaseCapture();
                }          
            };      
        }
    }
    return mDrag;
})(document))