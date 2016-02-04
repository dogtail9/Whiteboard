var TopNavBar = (function () {
    function TopNavBar() {
        this.text = 'Dogtail Whiteboard TypeScript';
    }
    return TopNavBar;
})();
angular
    .module('app')
    .controller('TopNavBar', TopNavBar);
