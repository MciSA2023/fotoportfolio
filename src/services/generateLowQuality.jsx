import Picture from "../modelle/picture";

const generateLowQualityPictures = async (pictures) => {
    const lowQualityPictures = [];

    for (const picture of pictures) {
        const lowQualityImageData = await generateLowQualityImage(picture.imagePath);
        const lowQualityPicture = new Picture(
            picture.id,
            lowQualityImageData,
            picture.category,
            picture.location,
            picture.format,
            true // Markiere das Bild als niedrigere Qualität
        );
        lowQualityPictures.push(lowQualityPicture);
    }

    return lowQualityPictures;
};

const generateLowQualityImage = async (imageUrl) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width / 2; // Verringere die Breite um die Hälfte (Beispiel)
            canvas.height = img.height / 2; // Verringere die Höhe um die Hälfte (Beispiel)
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const lowQualityImageData = canvas.toDataURL('image/jpeg', 0.5); // Verringere die Qualität (Beispiel)
            resolve(lowQualityImageData);
        };
        img.src = imageUrl;
    });
};

export default generateLowQualityPictures;
