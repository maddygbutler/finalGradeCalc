function currentGrade(){
    var homeworkPoints= document.getElementById("homeworkPoints").value;
    var homeworkWeight= document.getElementById("homeworkWeight").value;

    console.log(homeworkPoints);
    console.log(homeworkWeight);

    var participationPoints= document.getElementById("participationPoints").value;
    var participationWeight= document.getElementById("participationWeight").value;

    console.log(participationPoints);
    console.log(participationWeight);

    var classworkPoints= document.getElementById("classworkPoints").value;
    var classworkWeight= document.getElementById("classworkWeight").value;

    console.log(classworkPoints);
    console.log(classworkWeight);

    var testsPoints= document.getElementById("testsPoints").value;
    var testsWeight= document.getElementById("testsWeight").value;

    console.log(testsPoints);
    console.log(testsWeight);

    var projectsPoints= document.getElementById("projectsPoints").value;
    var projectsWeight= document.getElementById("projectsWeight").value;

    console.log(projectsPoints);
    console.log(projectsWeight);

    newNumber(str);


}



function newNumber(str){
    var arr= str.split(",");
    for(var i=0; i< arr.length; i++){
        arr[i]= parseInt(arr[i]);
    }
    console.log(arr);
    return arr;

}

function average(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i ++ ){
        sum = sum + arr[i];
    }
    return sum/(arr.length);
}
