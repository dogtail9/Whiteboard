class TopNavBar {
    text: string;
    loginText: string;
    registerText: string;
    contactText: string;
    connectToOnlineWhiteboardText: string;
    isConnected: boolean;
    conectedWhiteboardName: string;

    constructor() {
        this.text = 'Dogtail Whiteboard TypeScript';
        this.loginText = 'Login';
        this.registerText = 'Register';
        this.contactText = 'Contact';
        this.connectToOnlineWhiteboardText = 'Connect to online whiteboard';
        this.isConnected = false;
        this.conectedWhiteboardName = '';
    }

    onConnectOnline(): void {
        alert("ConnectOnline");
    }

    onContact(): void {
        alert("Contact");
    }
}

angular
    .module('app')
    .controller('TopNavBar', TopNavBar);