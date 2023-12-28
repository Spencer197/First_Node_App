const EventEmitter = require('events');
//const emitter = new EventEmitter(); - This object is not used in this code. Delete.

var url = 'http;//mylogger.io/log';

class Logger extends EventEmitter {//Logger class inherits all functionality of EventEmitter.
    log(message) {
        //Send an HTTP request.
        console.log(message);
    
        //In 'this' class we can emit events.
        this.emit('messageLogged',{ id: 1, url: 'http://'});
}

}

module.exports  = Logger;

