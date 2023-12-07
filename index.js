function scrollFunc(currentEl, toElemId){
    setClassActive(currentEl);
    const body = document.querySelector("body");
    const toelemHeight = document.getElementById(toElemId).offsetTop;
    body.scrollTo({top:toelemHeight,behavior:'smooth'});
}

function setClassActive(elem){
    let allActive = document.getElementsByClassName("active");
    for (const element of allActive){
        element.classList.remove("active")
    }
    elem.classList.add("active");

}