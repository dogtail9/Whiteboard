interface ITopNavBar {
    text: string;
}

class TopNavBar implements ITopNavBar {
    text: string;

    constructor() {
        this.text = 'Dogtail Whiteboard TypeScript';
    }
}

angular
    .module('app')
    .controller('TopNavBar', TopNavBar);