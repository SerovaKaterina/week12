function seeResult (){
    changeName ();
    changeImage ();
    changeComment ();
}

const fullName = document.querySelector(".form1");
const yourFoto = document.querySelector(".form2");
const yourComment = document.querySelector(".form3");
const btn = document.querySelector(".form__btn");

const resultName = document.querySelector(".fullname");
const resultComment = document.querySelector(".yourcomment");

function changeName() {
    let capital = fullName[0].toUpperCase();
    let rest = fullName.slice(1).toLowerCase();
    resultName = capital + rest;
}
console.log(changeName);


function changeComment() {
    resultComment = yourComment.replace(/(xxx|viagra)/gi , '***');
}
console.log(changeComment);

function changeImage() {
    document.querySelector ('.yourfoto').src = yourFoto.value;
}
