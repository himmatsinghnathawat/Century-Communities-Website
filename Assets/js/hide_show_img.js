const video = () => {

    const targetDiv1 = document.querySelector(".bb");
    const btn2 = document.querySelector(".aa");
    if (btn2) {
        btn2.onclick = function () {

            if (window.getComputedStyle(targetDiv).display == "block") {
                targetDiv1.style.display = "none";
            } else {
                targetDiv1.style.display = "block";
            }
        };

        const aa = document.querySelector(".ic");
        aa.onclick = function () {
            targetDiv1.style.display = "none";
        }
    }
}
export default video;