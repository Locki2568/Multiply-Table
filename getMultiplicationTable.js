function getMultiplicationTable(startIdx, endIdx){
    var resultTable;

    var curCombinationList = [];

    for(var i=startIdx; i<=endIdx; i++){
        curCombinationList += getCurrentCombination(i, endIdx);
        
    }

    console.log("debug here "+curCombinationList);
    return curCombinationList;
}

function getCurrentCombination(startIdx, endIdx){
    var curCombinationList = [];
    var currentIdx = startIdx;
    
    for (var i=startIdx; i<=endIdx; i++){
        var multiplicationResult = getMultiplicationResult(currentIdx, i);
        var tempResult = '';
        tempResult = currentIdx+'*'+i+'='+multiplicationResult+"  ";
        curCombinationList.push(tempResult);
    }
    
    return curCombinationList;
}

function getMultiplicationResult(currentIdx, endIdx){
    return (currentIdx * endIdx);
}

module.exports = getMultiplicationTable;