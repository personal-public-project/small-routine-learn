//index.js
//获取应用实例
var param = {
    data: {
        clickMsg: "显示点击的内容"
    },
    clickMe: function (e) {
        console.log(e);

        param.data.clickMsg = "显示点击内容" + "view0";
        this.setData(param.data);
    },
    doLoading: function (e) {
        console.log(e);
    }
}
Page(param);
