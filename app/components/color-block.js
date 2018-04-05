app.component("colorBlock", {
    templateUrl: "components/color-block.html",
    controller: "colorBlockController",
    bindings: {}
});

app.controller("colorBlockController", function ($timeout) {
    let me = this;
    this.bgc = "red";

    function changeColor(){
        me.bgc = (me.bgc === "red") ? "green" : "red";
        $timeout.set(1000).then(changeColor());
    }
});