function openCustomDown(elm) {
    if (elm.parentElement.children[1].style.display == "none")
        elm.parentElement.children[1].style.display = "block";
    else
        elm.parentElement.children[1].style.display = "none";
}