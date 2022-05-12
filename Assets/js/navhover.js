const Nav = () => {
    const him = document.querySelectorAll(".navbar");
    him.forEach((e, index) => {
        e.addEventListener("mouseover", () => {
           if(window.innerWidth > 993){
            show(index);
           }
        });
    });

    function show(index) {
        const main = document.querySelectorAll(".homeb");
        for (var q = 0; q < main.length; q++) {
            main[q].style.display = "none";
        }
        var y = main[index];
        if (y) {
            y.addEventListener("mouseleave", () => {
                y.style.display = "none";
            });
            if (y.style.display === "flex") {
                y.style.display = "none";
            } else {
                y.style.display = "flex";
            }
            console.log(main[index]);
        }
    }
}


export default Nav


