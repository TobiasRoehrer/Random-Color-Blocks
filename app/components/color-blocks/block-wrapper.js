app.component("blockWrapper", {
    templateUrl: "components/color-blocks/block-wrapper.html",
    controller: "blockWrapperController",
    bindings: {}
});

app.controller("blockWrapperController", function () {

});

app.config(function ($stateProvider) {
    $stateProvider.state({
        name: "color-block",
        params: {amountY: 1, amountX: 1},
        component: "blockWrapper"
    })
});