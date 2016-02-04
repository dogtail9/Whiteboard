interface IShell {
    text: string;
}

class Shell implements IShell {
    text: string;

    constructor() {
        this.text = 'Christer Eriksson';
    }
}

angular
    .module('app')
    .controller('Shell', Shell);