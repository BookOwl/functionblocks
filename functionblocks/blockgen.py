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

