app.factory("color", function () {
    function color(red,green,blue) {
        let me = this;

        this.red = Math.floor(Math.random()*256);
        this.green = Math.floor(Math.random()*256);
        this.blue = Math.floor(Math.random()*256);

        //The following block is not necessary and also faulty.
        /*
        this.red = (red < 256 && red >= 0) ? red : (Math.floor(Math.random()*256));
        this.green = (green < 256 && green >= 0) ? green : (Math.floor(Math.random()*256));
        this.blue = (blue < 256 && blue >= 0) ? blue : (Math.floor(Math.random()*256));

        Object.defineProperty(this, red, {writeable: false});
        Object.defineProperty(this, green, {writeable: false});
        Object.defineProperty(this, blue, {writeable: false});

        this.variant = function({red = me.red, green = me.green, blue = me.blue}){
            return new color(red,green,blue);
        }
        */

        this.string = function(){
            let redhex = ("0" + me.red.toString(16)).substr(-2).toUpperCase();
            let greenhex = ("0" + me.green.toString(16)).substr(-2).toUpperCase();
            let bluehex = ("0" + me.blue.toString(16)).substr(-2).toUpperCase();
            return "#" + redhex + greenhex + bluehex;
        }

    }
    return color;
});