parent = {
    data : "d10",
    children : [{
        data : "d20",
        children : [{
            data : "d50",
            children : []
        },{
            data : "d60",
            children : []
        }]
    },{
        data : "d30",
        children : [{
            data : "d70",
            children : []
        },{
            data : "d80",
            children : [{
                data : "d110",
                children : []
            },{
                data : "d120",
                children : []
            }]
        },{
            data : "d90",
            children : []
        }]
    },{
        data : "d40",
        children : [{
            data : "d100",
            children : []
        }]
    }]
};

function printGtree(node){
    //print root & it's  children
    
    let childrenPrint = "";
    for(let idx = 0;idx<node.children.length;idx++){
        childrenPrint += node.children[idx].data+" ";
    }
    console.log(`${node.data} : ${childrenPrint}`);

    //faith
    for(let idx = 0;idx<node.children.length;idx++){
        printGtree(node.children[idx]);
    }
}
printGtree(parent);