var editBtn=document.getElementsByClassName("editor");
var element=document.getElementsByClassName("edit");
var editClick = function() {
    console.log("coming");
    e.preventDefault();
    var prev = element.previousElementSibling;
   console.log(prev); 
    if(element.isContentEditable){
        element.classList.remove("span-focus");
        element.contentEditable="false";
    }else{
        element.className +="span-focus";
        element.contentEditable="true";

    }
}

for(var i=0; i<editBtn.length; i++) {
    console.log("coming");
    editBtn[i].addEventListener('click', editClick, false);
}

// editBtn.addEventListener("click",function(e){
//     console.log("coming");
//     e.preventDefault();
//     var prev = element.previousElementSibling;
//    console.log(prev); 
//     if(element.isContentEditable){
//         element.classList.remove("span-focus");
//         element.contentEditable="false";
//     }else{
//         element.className +="span-focus";
//         element.contentEditable="true";

//     }
// });