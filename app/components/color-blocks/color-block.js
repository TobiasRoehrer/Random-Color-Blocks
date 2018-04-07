app.component("colorBlock", {
    templateUrl: "components/color-blocks/color-block.html",
    controller: "colorBlockController",
    bindings: {
        time:"<"
    }
});

app.controller("colorBlockController", function ($timeout, color) {
    let me = this;
    this.bgc = new color().toString();

    this.$onInit = function(){
        me.time = (me.time) ? me.time : Math.floor(Math.random()*(2500-500+1)+500);
        me.changeColor();
    }

    this.changeColor = function(){
        me.bgc = new color().string();
        $timeout(me.time).then(me.changeColor);
    }

});