function getMultiplicationTable(startIdx, endIdx){
    var resultTable;

    var curCombinationList;

    for(var i=startIdx; i<=endIdx; i++){
        curCombinationList += getCurrentCombination(i, endIdx);
        
    }
    return curCombinationList;
}

function getCurrentCombination(startIdx, endIdx){
    var curCombinationList = [];
    var currentIdx = startIdx;
    
    for (var i=startIdx; i<=endIdx; i++){
        var multiplicationResult = getMultiplicationResult(currentIdx, startIdx);
        var tempResult = '';
        tempResult = currentIdx+'*'+startIdx+'='+multiplicationResult+"  ";
        curCombinationList.push(tempResult);
    }
    console.log("debug here "+curCombinationList);
}

function getMultiplicationResult(currentIdx, endIdx){
    return (currentIdx * endIdx);
}

module.exports = getMultiplicationTable;