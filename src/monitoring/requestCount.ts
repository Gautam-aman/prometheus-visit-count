import client from 'prom-client'

const requestCounter =new client.Counter({
    name : "Request_Count",
    help : "total request count",
    labelNames : ["method", "route"]
})



export function requestCount(req:any , res:any , next:any){
    requestCounter.inc({
        method : req.method, 
        route : req.route ? req.route.path : req.path ,
        
    })
    next();
}