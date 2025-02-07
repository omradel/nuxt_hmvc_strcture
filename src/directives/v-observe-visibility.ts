const observeVisibilityDirective = {
  mounted(el: HTMLElement, binding: any) {
    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        binding.value(true); // Trigger the callback function
        observer.disconnect(); // Disconnect after the first trigger
      }
    };

    const observer = new IntersectionObserver(callback);
    observer.observe(el);
  },
};

export default observeVisibilityDirective;
