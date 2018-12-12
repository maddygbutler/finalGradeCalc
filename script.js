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

    var hwAvg = average(newNumber(homeworkPoints));
    console.log(hwAvg);

    var parAvg = average(newNumber(participationPoints));
    console.log(parAvg);

    var cwAvg = average(newNumber(classworkPoints));
    console.log(cwAvg);

    var testAvg = average(newNumber(testsPoints));
    console.log(testAvg);

    var proAvg = average(newNumber(projectsPoints));
    console.log(proAvg);

    parseInt(homeworkWeight);

    parseInt(participationWeight);

    parseInt(classworkWeight);

    parseInt(testsWeight);

    parseInt(projectsWeight);

    var hwTotal= (hwAvg*(homeworkWeight/100));
    console.log(hwTotal);

    var parTotal= (parAvg*(participationWeight/100));
    console.log(parTotal);

    var cwTotal=(cwAvg*(classworkWeight/100));
    console.log(cwTotal);

    var testTotal= (testAvg*(testsWeight/100));
    console.log(testTotal);

    var proTotal= (proAvg*(projectsWeight/100));
    console.log(proAvg);

    var currentGrade=(hwTotal+parTotal+cwTotal+testTotal+proTotal);

    console.log(currentGrade);

    document.getElementById("currentGrade").innerHTML= currentGrade;

    return currentGrade;
}

function gradeNeeded(){
    var gradeDesired = [];

    var finalWeight = [];

    var current= currentGrade();

    var finalGrade = current;

    gradeDesired.push(document.getElementById("gradeDesired").value);
    finalWeight.push(document.getElementById("finalWeight").value);

    gradeDesired = parseInt(gradeDesired);
    finalWeight = parseInt(finalWeight);

    var currentPoints = (finalGrade / 100) * ( 1 - (finalWeight / 100));

    console.log(currentPoints);

    var pointsNeeded = (gradeDesired / 100 ) - currentPoints;
    var gradeNeeded = (pointsNeeded / (finalWeight/100)) * 100;

    gradeNeeded = gradeNeeded*100;
    gradeNeeded = Math.round(gradeNeeded);
    gradeNeeded = gradeNeeded/100;

    document.getElementById("youNeed").innerHTML= "You will need to score a "+ gradeNeeded + "%" + "to get a " + gradeDesired + "% overall";

    console.log(gradeNeeded);
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

function findWeight(){

}

