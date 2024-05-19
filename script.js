// //1. Create a HTML Element
// var ele = document.createElement("div");

// //to set attributes
// ele.setAttribute("class","container")


// //2. Adding contents to an existing HTML element
// //using innerHTML property
// var ele1 = document.createElement("div");
// ele1.setAttribute("class","row")
// ele.append(ele1)

// var ele2 = document.createElement("div");
// ele2.setAttribute("class","col")
// ele2.innerHTML="this is col"
// ele1.append(ele2)

// //3. To see the Output on the browser
// document.body.append(ele);




function foo(){
    var fname = document.getElementById("fname").value;
    console.log(`FirstName: ${fname}`);
    var mname = document.getElementById("mname").value;
    console.log(`MiddleName: ${mname}`);
    var lname = document.getElementById("lname").value;
    console.log(`LastName: ${lname}`);
    var email = document.getElementById("email").value;
    console.log(`Email: ${email}`);
    var pno = document.getElementById("pno").value;
    console.log(`Phone Number: ${pno}`);
}


