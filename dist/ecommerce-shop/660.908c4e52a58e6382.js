"use strict";(self.webpackChunkecommerce_shop=self.webpackChunkecommerce_shop||[]).push([[660],{2660:(B,c,n)=>{n.r(c),n.d(c,{BagModule:()=>C});var g=n(6895),l=n(4966),t=n(4650),r=n(2551),u=n(1319),m=n(7351);const p=[{path:"",component:(()=>{class e{constructor(o){this.EcommerceService=o,this.basketValues=[],this.type=!0,this.totalPrice=0}ngOnInit(){this.getBasket()}getBasket(){this.EcommerceService.getProduct("basket").subscribe(o=>{this.basketValues=o,setTimeout(()=>{this.totalPrice=this.itemTotal()},10)})}onButtonClicked(){setTimeout(()=>{this.getBasket(),this.totalPrice=this.itemTotal()},10)}itemTotal(){let a,o=0;return this.basketValues.forEach(s=>{o+=s.count*s.price,console.log(s)}),console.log(o.toFixed(2)),a=Number(o.toFixed(2)),a}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(r.B))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-bag"]],decls:10,vars:4,consts:[[1,"bas"],[1,"bag-left"],[1,"bag-left-container"],[1,"bag-title"],[1,"title"],[1,"bag-products"],[3,"items","buttonClicked"],[1,"bag-right"],["btntxt","Checkout","link","checkout",3,"total","items","isBanner"]],template:function(o,a){1&o&&(t.TgZ(0,"main",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"h1",4),t._uU(5,"Check your Bag Items"),t.qZA()(),t.TgZ(6,"div",5)(7,"app-cart-items",6),t.NdJ("buttonClicked",function(){return a.onButtonClicked()}),t.qZA()()()(),t.TgZ(8,"section",7),t._UZ(9,"app-bag-items",8),t.qZA()()),2&o&&(t.xp6(7),t.Q6J("items",a.basketValues),t.xp6(2),t.Q6J("total",a.totalPrice)("items",a.basketValues)("isBanner",!0))},dependencies:[u.C,m.b],styles:['.bas[_ngcontent-%COMP%]{width:1331px;display:flex;row-gap:30px}.bas[_ngcontent-%COMP%]   .bag-left[_ngcontent-%COMP%]{width:973px;padding-left:62px}.bas[_ngcontent-%COMP%]   .bag-left[_ngcontent-%COMP%]   .bag-left-container[_ngcontent-%COMP%]   .bag-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:400;font-size:48.83px;line-height:59px;color:#1a1f16}.bas[_ngcontent-%COMP%]   .bag-right[_ngcontent-%COMP%]{width:25.9903%;height:96vh;position:relative}.bas[_ngcontent-%COMP%]   .bag-right[_ngcontent-%COMP%]:before{content:"";display:inline-block;width:3px;background-color:#1a1f16;opacity:50%;position:absolute;top:15px;bottom:15px;border-radius:5px}']}),e})()}];let d=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(p),l.Bz]}),e})();var h=n(2133),b=n(7513);let C=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.ez,d,h.j,b.n]}),e})()}}]);