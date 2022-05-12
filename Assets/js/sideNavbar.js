import {
    offset
} from "@popperjs/core";

const resp = () => {
    const targetDiv = document.querySelector(".header__container__left-nav-links");
    const btn = document.querySelector(".cross1");
    //     btn.onclick = function () {

    //         if (window.getComputedStyle(targetDiv).display == "block") {
    //             targetDiv.style.display = "none";
    //             btn.classList.remove("fa-times");
    //         } else {
    //             targetDiv.style.display = "block";
    //             btn.classList.add("fa-times");
    //             console.log(btn.classList);


    //         }
    // targetDiv.classList.toggle("headeractive");


    //     };



    btn.addEventListener("click", function () {
        const classNameOfButton = "cross1";
        const bodyOverflow = document.querySelector(".body");

        if (!targetDiv.classList.contains("headeractive")) {
            targetDiv.classList.add("headeractive");
            btn.className = "fas fa-times header__container__left-logo-icon-bar " + classNameOfButton;
            if (bodyOverflow) {
                bodyOverflow.classList.add("no-scroll");
            }
        } else {
            targetDiv.classList.remove("headeractive");
            btn.className = "fas fa-bars header__container__left-logo-icon-bar " + classNameOfButton;
            if(bodyOverflow){bodyOverflow.classList.remove("no-scroll");}
        }

    });

}

export default resp;