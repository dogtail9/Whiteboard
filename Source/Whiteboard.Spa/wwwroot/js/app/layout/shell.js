var Shell = (function () {
    function Shell() {
        this.text = 'Christer Eriksson';
    }
    return Shell;
})();
angular
    .module('app')
    .controller('Shell', Shell);
