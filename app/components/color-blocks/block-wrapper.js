app.component("blockWrapper", {
    templateUrl: "components/block-wrapper.html",
    controller: "blockWrapperController",
    bindings: {}
});

app.controller("blockWrapperController", function () {

});

app.config(function ($stateProvider) {
    $stateProvider.state({
        name: "color-block",
        component: "color-block"
    })
});