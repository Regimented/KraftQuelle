export function getImageSrc(section: string, imageName: string) {
  try {
    const imageUrl = new URL(
      `/src/assets/images/${section}/${imageName}`,
      import.meta.url
    ).href;
    return imageUrl;
  } catch (error) {
    console.error(`Failed to load image: ${section}/${imageName}`, error);
    return "";
  }
}
