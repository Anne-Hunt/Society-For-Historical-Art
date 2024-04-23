import { AppState } from "../AppState.js";
import { Art } from "../models/Art.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";


class ArtService {
    async getArt() {
        let response = await api.get('api/artworks')
        logger.log('fetched yo art', response)
        const artwork = response.data.artworks.map(artData => new Art(artData))
        AppState.artworks = artwork
        AppState.currentPage = response.data.page
        AppState.totalPages = response.data.total_pages
    }

    setActiveArt(activeId) {
        const active = AppState.artworks.find(artwork => artwork.id == activeId)
        AppState.activeArt = active
    }

    async changePage(pageNumber) {
        const response = await api.get(`api/artworks?page=${pageNumber}`)
        logger.log('finding results for page', response.data)
        const artworks = response.data.artworks.map(artData => new Art(artData))
        AppState.artworks = artworks
        AppState.currentPage = response.data.page
        AppState.totalPages = response.data.total_pages
    }


}

export const artService = new ArtService()