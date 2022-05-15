let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count--;
    document.getElementById("counterLable").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("counterLable").innerHTML = count;
}
document.getElementById("increaseBtn").onclick = function(){
    count++;
    document.getElementById("counterLable").innerHTML = count;
}