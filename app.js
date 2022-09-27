
var form=document.querySelector("form")
var input=document.querySelectorAll("input")
var output=document.querySelector(".output")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // var a=input[0].value.trim();
    // var b=input[1].value.trim();
    // var c=input[2].value.trim();
    // var d=input[3].value.trim();
    // if(a==""){
    //     e.preventDefault();
    //     alert("please provide the name")
    //     input[0].focus();
    //     return false;
    // }
    // if(!isNaN(a)){
    //     e.preventDefault();
    //     alert("please provide the vaild name name")
    //     input[0].focus();
    //     return false;
    // }
    // if(b==""){
    //     e.preventDefault();
    //     alert("please provide the email id")
    //     input[1].focus();
    //     return false;
    // }
    // if(c==""){
    //     e.preventDefault();
    //     alert("please provide the password")
    //     input[2].focus();
    //     return false;
    // }
    // if(c.length<8){
    //     e.preventDefault();
    //     alert("please provide the vaild password")
    //     input[2].focus();
    //     return false;
    // }

    // if (d==""){
    //     e.preventDefault();
    //     alert("please provide the phone number")
    //     input[3].focus();
    //     return false;
    // }
    // if (d.length<10||d.length>10){
    //     e.preventDefault();
    //     alert("please provide the vaild phone number number")
    //     input[3].focus();
    //     return false;
    // }
    output.innerHTML+=`<label>Name</label><br><input class="inv" readonly value=${input[0].value}> <br>
    <label>Email</label><br><input class="inv" readonly value=${input[1].value}> <br>
    <label>Password</label><br><input class="inv" readonly value=${input[2].value}> <br>
    <label>Phone number</label><br><input class="inv" readonly value=${input[3].value}> <br>
    <button class="edit">edit</button>
    <button class="delete">delete</button><br>`
    var edit=document.querySelectorAll(".edit")
    var e=document.querySelectorAll(".inv")
    for (let index = 0; index < edit.length; index++) {
        edit[index].addEventListener("click",()=>{
            // edit[index].innerHTML="save"
            for(let i=0;i<e.length;i++){
                if(edit[i].innerHTML=="edit"){
                    e[i].removeAttribute("readonly")
                    edit[i].innerHTML="save"
                e[i].focus()
                }else {
                    edit[i].innerHTML="edit"
                    e[i].setAttribute("readonly","readonly")
                }
                  
            }
        })
        
    }
})











// let a=document.getElementById("a");
// let b=document.getElementById("d");
// let c=document.getElementById("c");
// let d=document.getElementById("d");
// var form=document.querySelector("form")
// var input=document.querySelectorAll("input")
// var output=document.querySelector(".output")
// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     if(a ==""){
//         e.preventDefault()
//         alert("please provide the name")
//     }
    

//     output.innerHTML+=`<label>Name</label><br><input class="inv" readonly value=${input[0].value}> <br>
//     <label>Email</label><br><input class="inv" readonly value=${input[1].value}> <br>
//     <label>Password</label><br><input class="inv" readonly value=${input[2].value}> <br>
//     <label>Phone number</label><br><input class="inv" readonly value=${input[3].value}> <br>
//     <button class="edit">edit</button>
//     <button class="delete">delete</button><br>`
//     var edit=document.querySelectorAll(".edit")
//     var e=document.querySelectorAll(".inv")
//     for (let index = 0; index < edit.length; index++) {
//         edit[index].addEventListener("click",()=>{
//             // edit[index].innerHTML="save"
//             for(let i=0;i<e.length;i++){
//                 if(edit[index].innerHTML="edit"){
//                     e[i].removeAttribute("readonly")
//                     edit[index].innerHTML="save"
//                 e[i].focus()
//                 }
//                 else{
//                     e[i].setAttribute("readonly","readonly")
//                 }
                  
//             }
//         })
        
//     }
// })




























// var form=document.querySelector("form")
// var input=document.querySelector(".input")
// var output=document.querySelector(".output")
// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     output.innerHTML+=`<input class="inv" readonly value=${input.value}> <br> <button id="edit">edit</button>
//     <button class="delete">delete</button><br>`
//     var d=document.querySelectorAll("#edit")
//     var e=document.querySelectorAll(".inv")
//     for (let index = 0; index < d.length; index++) {
//         d[index].addEventListener("click",()=>{
//             e[index].removeAttribute("readonly")
//             d[index].innerHTML="save"
//         })
        
//     }
// })