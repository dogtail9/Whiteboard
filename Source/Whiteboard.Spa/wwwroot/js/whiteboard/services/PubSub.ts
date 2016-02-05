class Mapping {
    constructor(
        public name: string,
        public callback: (payload?: any) => void) {
    }
}

class PubSub {
    mappings: Array<Mapping>;

    OnEvent(name: string, callback: (payload?: any) => void): void {
        var mapping = new Mapping(name, callback);
        this.mappings.push(mapping);
    }

    FireEvent(name: string, payload?: any): void {
        
        for (var mapping in this.mappings) {
            if (mapping.name === name) {
                mapping.callback(payload);
            }
        }
    }
}

angular
    .module('whiteboard')
    .factory('PubSub', PubSub);