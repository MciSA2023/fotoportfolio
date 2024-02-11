class Picture {
    constructor(id, imagePath, category, location) {
        this.id = id;
        this.imagePath = imagePath;
        this.category = Array.isArray(category) ? category : [category];
        this.location = location;
    }

}

export default Picture;
