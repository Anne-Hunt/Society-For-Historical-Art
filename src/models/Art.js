
export class Art {
    constuctor(data) {
        this.id = data.id
        this.rawUrl = data.imgUrls.rawUrl
        this.description = data.description
        this.attribution = data.attribution
        this.color = data.color
        this.admirers = data.admirers
        this.regular = data.regular
        this.full = data.imgUrls.full
        this.small = data.imgUrls.small
        this.slug = data.slug
    }
}