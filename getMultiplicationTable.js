function getMultiplicationTable(startIdx, endIdx){
    var resultTable;

    var curCombinationList = '';

    if(!checkInputNumberVaild(startIdx, endIdx)){
        return null;
    }

    for(var i=startIdx; i<=endIdx; i++){
        curCombinationList += getCurrentCombination(startIdx, i);  
    }

    console.log("debug here "+curCombinationList);
    return curCombinationList.substr(0, curCombinationList.length -1);
}

function getCurrentCombination(currentIdx, endIdx){
    var tempResult = '';
    for (var i=currentIdx; i<=endIdx; i++){
        var multiplicationResult = getMultiplicationResult(i, endIdx);
        
        if(i === endIdx){
            if(endIdx ===4){
                console.log("debug here");
            }
            tempResult += i+'*'+endIdx+'='+multiplicationResult+'\n';
        }else{
            tempResult += i+'*'+endIdx+'='+multiplicationResult+'  ';
        }
    }
    return tempResult;
}

function getMultiplicationResult(currentIdx, endIdx){
    return (currentIdx * endIdx);
}

function checkInputNumberVaild(currentIdx, rangeEnd){
    if (currentIdx <= 0){
        return false;
    }
    return true;
}

module.exports = getMultiplicationTable;