class myPromise {
    constructor(executor){
        this._state = 'pending';
        const resolve = res => {
            this._state = 'fullfilled'
            this.val = res
            return 
        }
        const reject = err => {
            this._state = 'rejected'
            this.val = err
        }

        try {
            executor(resolve,reject);
        } catch (error) {
            reject(error);
        }
    }

    then(successCB){
        successCB(this.val)
        this.finally()
    }
    catch(errCB){
        errCB(this.val)
        this.finally()
    }
    finally(CB){
        CB();
    }
}

class MyPromiseNew {
    constructor(executor){
        this.state = 'pending';
        this.val = null
        const resolve = res => {
            this.state = 'completed';
            this.val = res
            return this
        }

        const reject = err => {
            this.state = 'failed';
            this.val = res
            return this
        }

        try {
            executor(resolve,reject);
        } catch (error) {
            this.state = 'failed'
            reject(error)
        }
    }

    then(successCB){
        if(this.state !== 'pending'){
            successCB(this.val);
            this.finally();
        }
    }
    catch(errCB){
        if(this.state !== 'pending'){
            errCB(this.val);
            this.finally();
        }
    }
    finally(CB){
        CB();
    }
}

const prom = new Promise((res,rej)=>{
    if(true){
        resolve();
    }
    else {
        reject()
    }
})

prom
.then((res)=>{

})