var koa = require('koa');
var app = koa();

// x-response-time

app.use(function * (next){

var start = new Date;
yield next;

var ms = new Date - start;

this.set('X-response-Time', ms+ 'ms');

});

//logger

app.use(function *(next){
var start = new Date; 
yield next;

var ms = new Date - start;
console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(function *(){
this.body = 'Hello World';
});

app.listen(3000)

