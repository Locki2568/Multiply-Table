function getMultiplicationTable(startIdx, endIdx){
    var resultTable;

    var curCombinationList;

    for(var i=startIdx; i<=endIdx; i++){
        curCombinationList += curCombinationList(i, endIdx);
    }
    
}

function getCurrentCombination(currentIdx, endIdx){
    var curCombinationList = [];
    for (var i=startIdx; i<=endIdx; i++){
        curCombinationList += currentIdx+'*'+endIdx;
    }

}

function 

module.exports = getMultiplicationTable;