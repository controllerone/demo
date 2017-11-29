
window.onload= function () {

    function silder(box){
        this.banner=document.getElementsByClassName(box)[0];
        this.oUl=this.banner.getElementsByTagName("ul")[0];
        this.oLi=this.oUl.getElementsByTagName("li");
        this.btn=this.banner.getElementsByClassName("btn")[0];
        this. oSpan=this.btn.getElementsByTagName("span");
        this.left=this.btn.getElementsByClassName("left")[0];
        this.right=this.btn.getElementsByClassName("right")[0];
        this.num=0;
        this.timer=null;
        this.moveto();
        this.setI();
        this.over();
        this.out();
    }
    silder.prototype={
        move:function (num) {
            this.oUl.style.marginLeft = -num * 5 + "00px";
            for(var j=0;j<this.oSpan.length;j++){
                this.oSpan[j].className="";
            }
            this.oSpan[num].className="active";
        },
        moveto:function () {
            var that=this;
            for (var i = 0; i < this.oSpan.length; i++) {
                this.oSpan[i].index = i;
                this.oSpan[i].onclick = function () {
                    that.num = this.index;
                    that.move(that.num);
                };

            }
            this.left.onclick = function () {
                that.num--;
                if (that.num < 0) {
                    that.num = that.oSpan.length - 1;
                }
                that.move(that.num);
            };
            this.right.onclick = function () {
                that.num++;
                if (that.num > that.oSpan.length - 1) {
                    that.num = 0;
                }
                that.move(that.num);
            };
        },
        setI:function () {
            var that_ = this;
            this.timer = setInterval(function () {
                that_.right.onclick();
            }, 2000);
        },
        over:function () {
            var that=this;
            this.banner.onmouseover = function () {
                clearInterval(that.timer)
            };
        },
        out:function () {
            var that_ = this;
            this.banner.onmouseout = function () {
                that_.timer = setInterval(function () {
                    that_.right.onclick();
                }, 2000);
            }
        }

};
        var moveStart=new silder("banner");

};
