import Picture from "../modelle/picture";

function getpictures() {

    const pictures = [
        new Picture(1, require ("../img/DSC08772.jpeg"), 'nature', 'germany'),
        new Picture(2, require ("../img/DSC04270.JPG"), 'nature', 'germany'),
    ];

    return pictures;

}

export default getpictures;