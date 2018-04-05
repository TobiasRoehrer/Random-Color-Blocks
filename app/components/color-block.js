app.component("colorBlock", {
    templateUrl: "components/color-block.html",
    controller: "colorBlockController",
    bindings: {}
});

app.controller("colorBlockController", function ($timeout, color) {
    let me = this;
    this.bgc;

    (function changeColor(){
        //me.bgc = (me.bgc === "red") ? "green" : "red";
        me.bgc = new color().string();
        $timeout(1000).then(changeColor);
    })();


});