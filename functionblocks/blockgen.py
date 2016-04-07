# blockgen.py
# Functions for generating Scratch JSON

def procedure(name, args, atomic, body):
    argnames, argtypes = zip(*args)
    return [0, 0, 
            [["procDef", name + " " + " ".join(argtypes), list(argnames), [""]*len(argnames), atomic],
            body]]
def getparam(name):
    return ["getparam", name, "r"]
def listappend(listname, val):
    return ["append:toList:", val, listname]
def join(val1, val2):
    return ["concatenate:with:", val1, val2]
def setvar(varname, value):
    return ["setVar:to:", varname, value]
def add(arg1, arg2):
    return ["+", arg1, arg2]
def sub(arg1, arg2):
    return ["-", arg1, arg2]
def mul(arg1, arg2):
    return ["*", arg1, arg2]
def div(arg1, arg2):
    return ["\/", arg1, arg2]
def eq(arg1, arg2):
    return ["=", arg1, arg2] 
def gt(arg1, arg2):
    return [">", arg1, arg2]
def join(arg1, arg2):
    return ["concatenate:with:", arg1, arg2]

