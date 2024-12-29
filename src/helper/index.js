import confetti from "canvas-confetti";

export const celebrate = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
};

export const downloadCertificate = async (imageSrc, key) => {
  const name = `certificate_${key}.png`;
  const image = await fetch(imageSrc);
  const imageBlog = await image.blob();
  const imageURL = URL.createObjectURL(imageBlog);
  const link = document.createElement("a");
  link.classList.add("hidden_img_qr");
  link.href = imageURL;
  link.download = name;
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

export const makePath = (nameImg) => `src/assets/images/certificate/${nameImg}.png`;
