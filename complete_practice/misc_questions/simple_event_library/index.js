class Events {
    constructor(){
        this.events = {};
    }

    on(eventName,callBack){
        if(this.events[eventName]){
            this.events[eventName].push(callBack)
        }
        else {
            this.events[eventName] = [callBack]
        }
    }
    triggger(eventName,cb=null){
        if(cb){
            cb();
        }
        else{
            for(let cb of this.events[eventName]){
                cb();
            }
        }
    }
    off(eventName){
        delete this.events[eventName]
    }
}