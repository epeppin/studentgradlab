$(document).ready(
    function () {
        // add event handlers
        $("button#submit").click(scoreAssign)
        $("button#sortName").click(function (event){
            event.preventDefault();
            students.sort(sortName)
            var output = "";
            displayStudents();
        })
        $("button#sortPerc").click(function (event){
            event.preventDefault();
            students.sort(sortPercent)
            displayStudents();
        })

        var students = [];


        // all functions (program logic)
        function scoreAssign (event){
            event.preventDefault();

            var outputObj = {
                gradeText: "Grade: "
            };

            outputObj.firstName = $("#firstName").val()
            outputObj.lastName = $("#lastName").val()
            outputObj.pointPos = $("#pointsPos").val()
            outputObj.pointsEarn = $("#pointsEarn").val()

            outputObj.percent = Math.round(outputObj.pointsEarn / outputObj.pointPos * 100)
            outputObj.percentText = outputObj.percent + "%"



            if (outputObj.percent > 95){
                outputObj.grade = "A"
            }else if (outputObj.percent > 89.99){
                outputObj.grade = "A-"
            }else if (outputObj.percent > 84.99){
                outputObj.grade = "B"
            }else if (outputObj.percent > 79.99){
                outputObj.grade = "B-"
            }else if (outputObj.percent > 74.99){
                outputObj.grade = "C"
            }else {
                outputObj.grade = "F"
            }

            students.push(outputObj)

            displayStudents();
        }

        function displayStudents() {
            var output = "";
            for (var studentItem of students){
                output += (`${studentItem.firstName} ${studentItem.lastName}   ${studentItem.gradeText}${studentItem.grade}  
                ${studentItem.percentText}`)
                output += '<br>'
            }
            $("#outputFirst").html(output)
            $("#first").show()
        }

        function sortName (name1, name2){

            if (name1.lastName < name2.lastName)
                return -1;
            else if (name1.lastName > name2.lastName)
                return  1;
            else
                return 0;

        }
        function sortPercent (perc1, perc2){

            if (perc1.percent > perc2.percent)
                return -1;
            else if (perc1.percent < perc2.percent)
                return  1;
            else
                return 0;

        }



    }
);