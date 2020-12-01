$(document).ready(
    function () {
        // add event handlers
        $("form").submit(scoreAssign)

        var entry = {
            firstName: "",
            lastName: "",
            pointPos: 0,
            pointsEarn: 0
        };

        // all functions (program logic)
        function scoreAssign (event){
            event.preventDefault();

            var outputObj = {};

            entry.firstName = $("#firstName").val()
            entry.lastName = $("#lastName").val()
            entry.pointPos = $("#pointsPos").val()
            entry.pointsEarn = $("#pointsEarn").val()

            outputObj.percent = entry.pointsEarn / entry.pointPos * 100
            outputObj.percentText = outputObj.percent + "%"



            if (outputObj.percent > 95){
                $("#outputGrade").text("A")
            }else if (outputObj.percent > 89.99){
                $("#outputGrade").text("A-")
            }else if (outputObj.percent > 84.99){
                $("#outputGrade").text("B")
            }else if (outputObj.percent > 79.99){
                $("#outputGrade").text("B-")
            }else if (outputObj.percent > 74.99){
                $("#outputGrade").text("C")
            }else {
                $("#outputGrade").text("F")
            }
            $("#grade").show()
            $("#percent").show()
            $("#first").show()
            $("#last").show()
            $("#outputFirst").text(entry.firstName)
            $("#outputLast").text(entry.lastName)
            $("#outputPercent").text(outputObj.percentText)

        }



    }
);