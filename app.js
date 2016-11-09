//need use strict statement
$(function() { //doc.ready shorthand
   
function countWords(str) {
    var count = 0;

    for (var i = 0; i <= str.length; i++) {
        if (str.charAt(i) === " ") {
            count ++;
        }

    }
    return count + 1;  
}

function uniqueWordCount(str){
    var ary = str.split(" ");
    var obj = {};    
    for(var i=0; i<=ary.length; i++){
        if(ary[i] in obj ){
            obj[ary[i]] = obj[ary[i]] +1
        }
        else{
            obj[ary[i]]=1;  }
    }

return Object.keys(obj).length-1;


}
function meanWords(ary){
    var total =0;
    var mean;
    for (var i =0; i<ary.length; i++){
        total += ary[i].length;

    }
    mean = total/ary.length;

    return mean;
}
function meanSentence(str){
    var ary = str.split(" ");
    var sentence= str.split(".");
    return ary.length / (sentence.length + 1);

}

$("button").on("click", function (event){
event.preventDefault();
$("dl").removeClass("hidden");   

var words = countWords($("textarea").val());   
  $("#js-wordCount").append(countWords($("textarea").val()));
  $("#js-uniqueCount").append(uniqueWordCount($("textarea").val()));
  $("#js-meanWords").append(meanWords($("textarea").val().split(" ")));    
  $("#js-meanSentence").append(meanSentence($("textarea").val())); 
    
});











});
