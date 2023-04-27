const getImages = async() => {
  const imagePaths = import.meta.glob("../lib/assets/images/backgrounds/*.{png,jpg,jpeg,gif}");
  const imagePromises = Object.values(imagePaths).map((image) => image().then((mod) => mod.default));
  const images = await Promise.all(imagePromises);
  return images;
}

export function load({ params }) {
  return {
      backgrounds: getImages(),
  };
}