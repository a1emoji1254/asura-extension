import {
  Source,
  Manga,
  Chapter,
  ChapterDetails,
  PagedResults,
  HomeSection,
  SearchRequest
} from "paperback-extensions-common"

export const AsuraScans = class AsuraScans extends Source {
  constructor() {
    super({
      id: "asura.scans",
      name: "Asura Scans",
      icon: "icon.png",
      version: "1.0.0",
      author: "You",
      description: "Asura Scans basic extension",
      websiteBaseURL: "https://www.asurascans.com"
    })
  }

  async getMangaDetails(mangaId: string): Promise<Manga> {
    return {
      id: mangaId,
      titles: [mangaId],
      image: "",
      status: "ONGOING",
      author: "",
      desc: "Asura Scans manga",
      rating: 0,
      hentai: false
    }
  }

  async getChapters(mangaId: string): Promise<Chapter[]> {
    return []
  }

  async getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails> {
    return {
      id: chapterId,
      mangaId: mangaId,
      pages: []
    }
  }

  async getHomePageSections(sectionCallback: (section: HomeSection) => void): Promise<void> {
    const section = {
      id: "popular",
      title: "Popular Titles",
      items: []
    }
    sectionCallback(section)
  }

  async getSearchResults(query: SearchRequest, metadata: any): Promise<PagedResults> {
    return {
      results: [],
      metadata: undefined
    }
  }
}
