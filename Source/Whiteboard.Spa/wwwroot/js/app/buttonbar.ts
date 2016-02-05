class ButtonBar {
    toggleButtonText: string;
    panEnabled: boolean;
    penColor: string;

    constructor() {
        this.toggleButtonText = 'Draw';
        this.panEnabled = false;
        this.penColor = 'red';
    }

    onPenColorChanged(color: string): void {
        this.penColor = color;
    }

    onTogglePanClick(): void {
        this.panEnabled = !this.panEnabled;
        this.panEnabled ? this.toggleButtonText = "Pan" : this.toggleButtonText = "Draw";
    }

    onUndoClick(): void {

    }

    onRedoClick(): void {

    }

    onEraseAllClick(): void {

    }

    onSaveClick(): void {

    }

    onLoadClick(): void {

    }
}

angular
    .module('app')
    .controller('ButtonBar', ButtonBar);