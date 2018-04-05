app.factory("color", function () {
    function color(red,green,blue) {
        let me = this;

        this.red = (red < 256 && red >= 0) ? red : (math.floor(math.random*256));
        this.green = (green < 256 && green >= 0) ? green : (math.floor(math.random*256));
        this.blue = (blue < 256 && blue >= 0) ? blue : (math.floor(math.random*256));

        Object.defineProperty(this, red, {writeable: false});
        Object.defineProperty(this, green, {writeable: false});
        Object.defineProperty(this, blue, {writeable: false});

        this.variant = function({red = me.red, green = me.green, blue = me.blue}){
            return new color(red,green,blue);
        }

    }
    return color;
});