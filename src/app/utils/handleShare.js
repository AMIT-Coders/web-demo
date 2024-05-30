export const handleShare = () => {
  const currentURL = window.location.href;
  navigator.clipboard
    .writeText(currentURL)
    .then(() => {
      alert("Copied to clipboard: " + currentURL);
    })
    .catch((error) => {
      console.error("Failed to copy URL: ", error);
      alert("Failed to copy URL.");
    });
};
