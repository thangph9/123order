$(document).ready(function () {
                $(".owl-one").owlCarousel({
                    loop: true,
                    items: 1,
                    autoplay: true,
                    autoplaySpeed: 250,
                    autoplayHoverPause: true,
                    margin: 10,
                    nav: false,
                    dots: false,
                });
            });

        $(document).ready(function () {
                $(".owl-two").owlCarousel({
                    
                    responsiveClass:true,
                    responsive:{
                        0:{
                            items:1,
                            nav:false
                        },
                        600:{
                            items:3,
                            nav:false
                        },
                        1000:{
                            loop: true,
                            items: 4,
                            autoplay: true,
                            autoplaySpeed: 250,
                            autoplayHoverPause: true,
                            margin: 10,
                            nav: false,
                            dots: false,
                        }
                    }
                });
            });