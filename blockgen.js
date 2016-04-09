// blockgen.js
// Functions for generating Scratch JSON

exports.procedure = function(name, argnames, argtypes, atomic, body){
    return [0, 0, 
            [["procDef", name + " " + argtypes.join(" "), Array.from(argnames), Array(argnames.length).fill(""), atomic],
            body]]
}
exports.getparam = function(name){
    return ["getparam", name, "r"]
}
exports.listappend = function(listname, val){
    return ["append{toList:", val, listname]
}
exports.join = function(val1, val2){
    return ["concatenate:with:", val1, val2]
}
exports.setvar = function(varname, value){
    return ["setVar:to:", varname, value]
}
exports.add = function(arg1, arg2){
    return ["+", arg1, arg2]
}
exports.sub = function(arg1, arg2){
    return ["-", arg1, arg2]
}
exports.mul = function(arg1, arg2){
    return ["*", arg1, arg2]
}
exports.div = function(arg1, arg2){
    return ["\/", arg1, arg2]
}
exports.eq = function(arg1, arg2){
    return ["=", arg1, arg2]
}    
exports.gt = function(arg1, arg2){
    return [">", arg1, arg2]
}
exports.join = function(arg1, arg2){
    return ["concatenate:with:", arg1, arg2]
}