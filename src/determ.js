export default (postParams) => {
    var result = {};
    let data = parseData(postParams)
    result.relations = data;
    result.entitys = entitys(data);
    result.domain = domain(data);
    result.codomain = codomain(data);
    result.hasReflexivity = reflex(data,result.entitys);
    result.hasSimetry = simetry(data,result.relations);
    result.hasTransitivity = trans(data);
    result.isFunction = isFunction(data,result.entitys);
    result.status = 200
    return result;
}

function isFunction(data,entitys){
    var counter = 0;
    entitys.forEach(X=>{
        data.forEach(Y=>{
            if(X.key === Y.from){
                counter++;
            }
        })
    })
    let isFun = counter === entitys.length ? true : false;
    return isFun
}
function reflex(data,entitys){
    var counter = 0;
    data.forEach(element=>{
        if(element.from === element.to){
            counter++;
        }
    })
    let hasRef = entitys.length === counter ? true : false; 
    return hasRef
}
function simetry(data,relations){
    let counter = 0;
    data.forEach(YX=>{
        data.forEach(XY=>{
            if(YX.to === XY.from && YX.from === XY.to){
                counter++;
            }
        })
    })
    let hasSimetry = relations.length === counter ? true : false;
    return hasSimetry
}
function biyectiva(){

}
function sobreyectiva(){

}
function inyectiva(){
    
}

function trans(data){
    return new Promise(function(resolve,reject){
        data.forEach(XY=>{
            
        })
        return resolve(true)
    }).catch(e=>console.error("trans "+e))
}
function parseData(data){
    var datas = []
    var relation = data.relation
    var arr = relation.split(")");
    arr.pop();
    arr.forEach(element => {
        let foo = element.split("(");
        element = foo[1];
        let prearr = element.split(",");
        datas.push({from: prearr[0], to: prearr[1]});
    });
    return datas
}
function domain(data){
    let domains = [];
    data.forEach(element=>{
        if(domains.indexOf(element.from) === -1){
            domains.push(element.from);
        }
    })
    domains.sort()
    return domains
}
function codomain(data){
    let codomains = [];
    data.forEach(element=>{
        if(codomains.indexOf(element.to) === -1){
            codomains.push(element.to);
        }
    })
    codomains.sort()
    return codomains
}
function entitys(data){
    let domains = [];
    let entitys = [];
    data.forEach(element=>{
        if(domains.indexOf(element.from) === -1){
            domains.push(element.from);
        }
    })
    data.forEach(element=>{
        if(domains.indexOf(element.to) === -1){
            domains.push(element.to);
        }
    })
    domains.sort()
    domains.forEach(element=>{
        entitys.push({key: element, color: "lightblue"})
    })
    return entitys
}
