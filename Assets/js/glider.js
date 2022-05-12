const glider = () => {
        console.log("working");
        let glider1=document.querySelector(".glider");

        if (glider1) {
            new Glider(document.querySelector(".glider"), {
                slidesToShow: 3,
                slidesToScroll: 1,
                draggable: true,
                dots: ".dots",
                responsive: [


                    {
                        // If Screen Size More than px576
                        breakpoint: 300,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            duration: 0.5,
                            arrows: {
                                prev: ".prev",
                                next: ".next"
                            }
                        }
                    },

                    {
                        // If Screen Size More than 768px
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            duration: 0.5,
                            arrows: {
                                prev: ".prev",
                                next: ".next"
                            }
                        }
                    },



                    {
                        // If Screen Size More than 1024px
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            duration: 0.5,
                            arrows: {
                                prev: ".prev",
                                next: ".next"
                            }
                        }
                    }
                ]
            });
        }
        }
        export default glider;