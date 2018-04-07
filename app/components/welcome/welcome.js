app.component("welcome", {
    templateUrl: "components/welcome/welcome.html",
    controller: "welcomeController",
    bindings: {}
});

app.controller("welcomeController", function () {

});

app.config(function ($stateProvider) {
    $stateProvider.state({
        name: "welcome",
        url: "/welcome",
        component: "welcome"
    })
});