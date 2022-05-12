const img = () => {

    const targetDiv2 = document.querySelector(".img");
    const btn3 = document.querySelector(".map");
    if (btn3) {
        btn3.onclick = function () {

            if (window.getComputedStyle(targetDiv2).display == "block") {
                targetDiv2.style.display = "none";
            } else {
                targetDiv2.style.display = "block";
            }
        };

        // const cross = document.querySelector(".remove");
        // cross.onclick = function () {
        //     targetDiv2.style.display = "none";
        //}
    }
}
export default img;