# functionblocksgrammer.ne

@builtin "number.ne"
@builtin "string.ne"
@builtin "whitespace.ne"

program -> _ ( define _ ):+ 

define -> funcdef | valdef 
funcdef -> "define" __ name _ "(" ( _ name ):* _ ")" _ "->" _ expr
valdef -> "define" __ name _ "->" _ expr

special -> if | do
if ->"if" __ expr __ "then" __ expr __ "else" __ expr
do -> "do" __ (expr __):+ "end"

expr -> binop 
binop -> p1 _ ( "=" _ p1 | ">" _ p1 | "<" _ p1 | "!=" _ p1 ):* 
p1 -> p2 _ ( "+" _ p2 | "-" _ p2 ):*
p2 -> p3 _ ( "*" _ p3 | "/" _ p3 ):*
p3 -> special | call | literal | "(" _ binop _ ")" 

call -> name _ "(" _ ( expr "," _ ):* _ ")" 

literal -> number | name | string

number -> decimal

name -> [a-zA-Z_]:+ {%
    function(data, location, reject){
        return data.join("");
    }
%}

string -> dqstring | sqstring