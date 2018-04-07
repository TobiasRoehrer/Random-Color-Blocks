app.component("blockWrapper", {
    templateUrl: "components/color-blocks/block-wrapper.html",
    controller: "blockWrapperController",
    bindings: {}
});

app.controller("blockWrapperController", function ($stateParams) {
    this.amountX = Array($stateParams.amountX).fill("");
    this.amountY = Array($stateParams.amountY).fill("");
});

app.config(function ($stateProvider) {
    $stateProvider.state({
        name: "color-block",
        params: {amountY: 1, amountX: 1},
        component: "blockWrapper"
    })
});