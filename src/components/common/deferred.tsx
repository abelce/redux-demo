export class Deferred{
    promise: any;
    resolve: any;
    reject: any;
    constructor(){
        this.promise = new Promise((resolve: any, reject: any) => {
           this.resolve = resolve;
           this.reject = reject;
        });
    }
}