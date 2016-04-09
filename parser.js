// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }

function nth(n) {
    return function(d) {
        return d[n];
    };
}


function $(o) {
    return function(d) {
        var ret = {};
        Object.keys(o).forEach(function(k) {
            ret[k] = d[o[k]];
        });
        return ret;
    };
}
var grammar = {
    ParserRules: [
    {"name": "posint$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "posint$ebnf$1", "symbols": [/[0-9]/, "posint$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "posint", "symbols": ["posint$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/, "int$ebnf$2"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/, "decimal$ebnf$2"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/, "decimal$ebnf$3$subexpression$1$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/, "jsonfloat$ebnf$2"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$2"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "dqstring$ebnf$1", "symbols": []},
    {"name": "dqstring$ebnf$1", "symbols": ["dstrchar", "dqstring$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "dqstring", "symbols": [{"literal":"\""}, "dqstring$ebnf$1", {"literal":"\""}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "sqstring$ebnf$1", "symbols": []},
    {"name": "sqstring$ebnf$1", "symbols": ["sstrchar", "sqstring$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "sqstring", "symbols": [{"literal":"'"}, "sqstring$ebnf$1", {"literal":"'"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "btstring$ebnf$1", "symbols": []},
    {"name": "btstring$ebnf$1", "symbols": [/[^`]/, "btstring$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "btstring", "symbols": [{"literal":"`"}, "btstring$ebnf$1", {"literal":"`"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "dstrchar", "symbols": [/[^\\"\n]/], "postprocess": id},
    {"name": "dstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": 
        function(d) {
            return JSON.parse("\""+d.join("")+"\"");
        }
        },
    {"name": "sstrchar", "symbols": [/[^\\'\n]/], "postprocess": id},
    {"name": "sstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": 
        function(d) {
            return JSON.parse("\""+d.join("")+"\"");
        }
        },
    {"name": "strescape", "symbols": [/["'\\/bfnrt]/], "postprocess": id},
    {"name": "strescape", "symbols": [{"literal":"u"}, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/], "postprocess": 
        function(d) {
            return d.join("");
        }
        },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["wschar", "_$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["wschar", "__$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "program$ebnf$1$subexpression$1", "symbols": ["define", "_"]},
    {"name": "program$ebnf$1", "symbols": ["program$ebnf$1$subexpression$1"]},
    {"name": "program$ebnf$1$subexpression$2", "symbols": ["define", "_"]},
    {"name": "program$ebnf$1", "symbols": ["program$ebnf$1$subexpression$2", "program$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "program", "symbols": ["program$ebnf$1"]},
    {"name": "define", "symbols": ["funcdef"]},
    {"name": "define", "symbols": ["valdef"]},
    {"name": "funcdef$string$1", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "funcdef$ebnf$1", "symbols": []},
    {"name": "funcdef$ebnf$1$subexpression$1", "symbols": ["_", "name"]},
    {"name": "funcdef$ebnf$1", "symbols": ["funcdef$ebnf$1$subexpression$1", "funcdef$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "funcdef$string$2", "symbols": [{"literal":"-"}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "funcdef", "symbols": ["funcdef$string$1", "__", "name", "_", {"literal":"("}, "funcdef$ebnf$1", "_", {"literal":")"}, "_", "funcdef$string$2", "_", "expr"]},
    {"name": "valdef$string$1", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "valdef$string$2", "symbols": [{"literal":"-"}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "valdef", "symbols": ["valdef$string$1", "__", "name", "_", "valdef$string$2", "_", "expr"]},
    {"name": "special", "symbols": ["if"]},
    {"name": "special", "symbols": ["do"]},
    {"name": "if$string$1", "symbols": [{"literal":"i"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "if$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "if$string$3", "symbols": [{"literal":"e"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "if", "symbols": ["if$string$1", "__", "expr", "__", "if$string$2", "__", "expr", "__", "if$string$3", "__", "expr"]},
    {"name": "do$string$1", "symbols": [{"literal":"d"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "do$ebnf$1$subexpression$1", "symbols": ["expr", "__"]},
    {"name": "do$ebnf$1", "symbols": ["do$ebnf$1$subexpression$1"]},
    {"name": "do$ebnf$1$subexpression$2", "symbols": ["expr", "__"]},
    {"name": "do$ebnf$1", "symbols": ["do$ebnf$1$subexpression$2", "do$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "do$string$2", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "do", "symbols": ["do$string$1", "__", "do$ebnf$1", "do$string$2"]},
    {"name": "expr", "symbols": ["binop"]},
    {"name": "binop$ebnf$1", "symbols": []},
    {"name": "binop$ebnf$1$subexpression$1", "symbols": [{"literal":"="}, "_", "p1"]},
    {"name": "binop$ebnf$1$subexpression$1", "symbols": [{"literal":">"}, "_", "p1"]},
    {"name": "binop$ebnf$1$subexpression$1", "symbols": [{"literal":"<"}, "_", "p1"]},
    {"name": "binop$ebnf$1$subexpression$1$string$1", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "binop$ebnf$1$subexpression$1", "symbols": ["binop$ebnf$1$subexpression$1$string$1", "_", "p1"]},
    {"name": "binop$ebnf$1", "symbols": ["binop$ebnf$1$subexpression$1", "binop$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "binop", "symbols": ["p1", "_", "binop$ebnf$1"]},
    {"name": "p1$ebnf$1", "symbols": []},
    {"name": "p1$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}, "_", "p2"]},
    {"name": "p1$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}, "_", "p2"]},
    {"name": "p1$ebnf$1", "symbols": ["p1$ebnf$1$subexpression$1", "p1$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "p1", "symbols": ["p2", "_", "p1$ebnf$1"]},
    {"name": "p2$ebnf$1", "symbols": []},
    {"name": "p2$ebnf$1$subexpression$1", "symbols": [{"literal":"*"}, "_", "p3"]},
    {"name": "p2$ebnf$1$subexpression$1", "symbols": [{"literal":"/"}, "_", "p3"]},
    {"name": "p2$ebnf$1", "symbols": ["p2$ebnf$1$subexpression$1", "p2$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "p2", "symbols": ["p3", "_", "p2$ebnf$1"]},
    {"name": "p3", "symbols": ["special"]},
    {"name": "p3", "symbols": ["call"]},
    {"name": "p3", "symbols": ["literal"]},
    {"name": "p3", "symbols": [{"literal":"("}, "_", "binop", "_", {"literal":")"}]},
    {"name": "call$ebnf$1", "symbols": []},
    {"name": "call$ebnf$1$subexpression$1", "symbols": ["expr", {"literal":","}, "_"]},
    {"name": "call$ebnf$1", "symbols": ["call$ebnf$1$subexpression$1", "call$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "call", "symbols": ["name", "_", {"literal":"("}, "_", "call$ebnf$1", "_", {"literal":")"}]},
    {"name": "literal", "symbols": ["number"]},
    {"name": "literal", "symbols": ["name"]},
    {"name": "literal", "symbols": ["string"]},
    {"name": "number", "symbols": ["decimal"]},
    {"name": "name$ebnf$1", "symbols": [/[a-zA-Z_]/]},
    {"name": "name$ebnf$1", "symbols": [/[a-zA-Z_]/, "name$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "name", "symbols": ["name$ebnf$1"], "postprocess": 
        function(data, location, reject){
            return data.join("");
        }
        },
    {"name": "string", "symbols": ["dqstring"]},
    {"name": "string", "symbols": ["sqstring"]}
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
