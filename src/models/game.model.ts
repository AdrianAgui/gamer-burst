export interface Game {
  id: number
  slug: string
  name: string
  released: string
  tba: boolean
  background_image: string
  rating: number
  rating_top: number
  ratings: Rating[]
  ratings_count: number
  reviews_text_count: number
  added: number
  added_by_status: AddedByStatus
  metacritic: number
  playtime: number
  suggestions_count: number
  updated: string
  user_game: string
  reviews_count: number
  saturated_color: string
  dominant_color: string
  platforms: Platform[]
  parent_platforms: ParentPlatform[]
  genres: Genre[]
  stores: Store[]
  clip: string
  tags: Tag[]
  esrb_rating: EsrbRating
  short_screenshots: ShortScreenshot[]
  price: number
}

interface Rating {
  id: number
  title: string
  count: number
  percent: number
}

interface AddedByStatus {
  yet: number
  owned: number
  beaten: number
  toplay: number
  dropped: number
  playing: number
}

interface Platform {
  platform: Platform2
  released_at: string
  requirements_en?: RequirementsEn
}

interface Platform2 {
  id: number
  name: string
  slug: string
  image: string
  year_end: string
  year_start?: number
  games_count: number
  image_background: string
}

interface RequirementsEn {
  minimum: string
  recommended: string
}

interface ParentPlatform {
  platform: Platform3
}

interface Platform3 {
  id: number
  name: string
  slug: string
}

interface Genre {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}

interface Store {
  id: number
  store: Store2
}

interface Store2 {
  id: number
  name: string
  slug: string
  domain: string
  games_count: number
  image_background: string
}

interface Tag {
  id: number
  name: string
  slug: string
  language: string
  games_count: number
  image_background: string
}

interface EsrbRating {
  id: number
  name: string
  slug: string
}

interface ShortScreenshot {
  id: number
  image: string
}
