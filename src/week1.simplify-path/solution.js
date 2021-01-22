var simplifyPath = function(path) {
    let tree = new Array();
    let pathSplit = path.split("/");
    for(let i = 0 ; i < pathSplit.length;i++){
        const p = pathSplit[i];
        
        if(!(i != 0 && p == "") && p != "."){
            if(p == ".."){
                tree.pop();
                if(tree.length < 1) tree.push('');
            }else{
                tree.push(p);
            }
        }
    }
    if(tree.length < 2) return "/";
    else return tree.join("/")
};