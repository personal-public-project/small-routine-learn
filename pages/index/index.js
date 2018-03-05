//index.js
//获取应用实例
var param = {
    data:{
        message:"微信小程序",
        array:[1,2,3,4,"hello","wx"],
        view:"APP",
        zhangsan:{name:"张三",age:18},
        lisi:{name:"李四",age:28},
        count:0
    },
    add:function (e) {
        this.setData({
            count:this.data.count+1
        })
    }
}
Page(param);
