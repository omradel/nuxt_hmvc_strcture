import "vue3-carousel/dist/carousel.css";
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";
import { ref } from "vue";

export const useCarousel = () => {
  const settings = ref({
    itemsToShow: 3,
    snapAlign: "center",
  });

  //   this for Ramadan chalenge component
  const breakpoints1 = ref({
    // For screens 0px and up
    0: {
      itemsToShow: 1,
      itemsToScroll: 1,
      snapAlign: "center",
      autoplay: false,
      autoplayTimeout: 3000,
      transition: 200,
      loop: true,
    },
    // For screens 480px and up
    480: {
      itemsToShow: 1,
      itemsToScroll: 1,
      snapAlign: "center",
      autoplay: false,
      autoplayTimeout: 3000,
      transition: 200,
      loop: true,
    },
    // For screens 768px and up
    768: {
      itemsToShow: 2,
      itemsToScroll: 1,
      snapAlign: "start",
      autoplay: false,
      autoplayTimeout: 3000,
      transition: 200,
      loop: true,
    },
    // For screens 1024px and up
    1024: {
      itemsToShow: 3,
      itemsToScroll: 1,
      snapAlign: "center",
      autoplay: false,
      transition: 200,
      loop: true,
    },
    // For screens 1440px and up
    1440: {
      itemsToShow: 3,
      itemsToScroll: 1,
      snapAlign: "",
      autoplay: false,
      transition: 200,
      loop: true,
    },
  });

  //   this for Parteners component
  const breakpoints2 = ref({
    0: {
      itemsToShow: 1,
      itemsToScroll: 1,
      snapAlign: "center",
      autoplay: false,
      autoplayTimeout: 3000,
      transition: 200,
      loop: true,
    },

    480: {
      itemsToShow: 2,
      itemsToScroll: 1,
      snapAlign: "center",
      autoplay: false,
      autoplayTimeout: 3000,
      transition: 200,
      loop: true,
    },

    768: {
      itemsToShow: 2,
      itemsToScroll: 1,
      snapAlign: "start",
      autoplay: false,
      autoplayTimeout: 3000,
      transition: 200,
      loop: true,
    },
    // For screens 1024px and up
    1024: {
      itemsToShow: 4,
      itemsToScroll: 1,
      snapAlign: "center",
      autoplay: false,
      transition: 200,
      loop: true,
    },
    // For screens 1440px and up
    1440: {
      itemsToShow: 4,
      itemsToScroll: 1,
      snapAlign: "",
      autoplay: false,
      transition: 200,
      loop: true,
    },
  });

  //   this for Famouses component
  const breakpoints3 = ref({
    // For screens 0px and up
    0: {
      itemsToShow: 2,
      itemsToScroll: 1,
      snapAlign: "center",
      autoplay: false,
      autoplayTimeout: 3000,
      transition: 200,
      loop: true,
    },
    // For screens 480px and up
    480: {
      itemsToShow: 2,
      itemsToScroll: 1,
      snapAlign: "center",
      autoplay: false,
      autoplayTimeout: 3000,
      transition: 200,
      loop: true,
    },
    // For screens 768px and up
    768: {
      itemsToShow: 3,
      itemsToScroll: 1,
      snapAlign: "start",
      autoplay: false,
      autoplayTimeout: 3000,
      transition: 200,
      loop: true,
    },
    // For screens 1024px and up
    1024: {
      itemsToShow: 6,
      itemsToScroll: 1,
      snapAlign: "center",
      autoplay: false,
      transition: 200,
      loop: true,
    },
    // For screens 1440px and up
    1440: {
      itemsToShow: 6,
      itemsToScroll: 1,
      snapAlign: "",
      autoplay: false,
      transition: 200,
      loop: true,
    },
  });

  //   this for SuccessStories component
  const breakpoints4 = ref({
    // For screens 0px and up
    0: {
      itemsToShow: 1,
      itemsToScroll: 1,
      snapAlign: "center",
      autoplay: false,
      autoplayTimeout: 3000,
      transition: 200,
      loop: true,
    },
    // For screens 480px and up
    480: {
      itemsToShow: 1,
      itemsToScroll: 1,
      snapAlign: "center",
      autoplay: false,
      autoplayTimeout: 3000,
      transition: 200,
      loop: true,
    },
    // For screens 768px and up
    768: {
      itemsToShow: 1,
      itemsToScroll: 1,
      snapAlign: "start",
      autoplay: false,
      autoplayTimeout: 3000,
      transition: 200,
      loop: true,
    },
    // For screens 1024px and up
    1024: {
      itemsToShow: 1,
      itemsToScroll: 1,
      snapAlign: "right",
      autoplay: false,
      transition: 200,
      loop: true,
    },
    // For screens 1440px and up
    1440: {
      itemsToShow: 1,
      itemsToScroll: 1,
      snapAlign: "center",
      autoplay: false,
      transition: 200,
      loop: true,
    },
  });

  return {
    settings,
    breakpoints1,
    breakpoints2,
    breakpoints3,
    breakpoints4,
    Carousel,
    Pagination,
    Slide,
    Navigation,
  };
};
