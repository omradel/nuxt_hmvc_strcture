export const sharePage = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Ramadan Challenge",
        text: "Check out this donation campaign!",
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  } else {
    alert("Sharing is not supported on this device.");
  }
};
