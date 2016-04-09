// parsertest.js
"use strict"

let fs = require("fs")
let nearley = require("nearley")
let grammer = require("./parser.js")

let parser = new nearley.Parser(grammer.ParserRules, "program")

fs.readFile("examples/test2.fb", "utf8", (err, data) => {
    console.log(data)
    if (err) throw err
    console.log("Parsing examples/test2.fb")
    parser.feed(data)
    console.log("Results:")
    console.log(parser.results.length)
    console.log(JSON.stringify(parser.results[0], null, "  " ))
    for (let i = 1; i < parser.results.length; i++){
        if (JSON.stringify(parser.results[0]) == JSON.stringify(parser.results[1])){
            console.log("results[0] == results["+i+"]")
        } else{
            console.log("results[0] == results["+i+"]")
        }
    }
  }
)