const getImages = async (): Promise<HTMLImageElement[]> => {
	const imagePaths: Record<string, () => Promise<{ default: HTMLImageElement }>> = import.meta.glob(
		'../lib/assets/images/backgrounds/*.{png,jpg,jpeg,gif}'
	);
	const imagePromises: Promise<HTMLImageElement>[] = Object.values(imagePaths).map((image) =>
		image().then((mod) => mod.default)
	);
	const images: HTMLImageElement[] = await Promise.all(imagePromises);
	return images;
};
export const load = async ({ params }) => {
	return {
		backgrounds: getImages()
	};
};
