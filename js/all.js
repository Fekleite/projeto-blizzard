"use strict";var slideThumb=new Swiper(".slide-thumbnail",{slidesPerView:5,direction:"vertical",spaceBetween:20,watchSlidesProgress:!0}),slideHero=new Swiper(".slide-principal",{effect:"fade",thumbs:{swiper:slideThumb},autoplay:{delay:5e3,disableOnInteraction:!1}});