export type Category = "general"
                      | "development"
                      | "research"
                      | "ai"
                      | "math"
                      | "books"
                      | "physics"
                      | "music"
                      | "art"
                      | "writing"
                      | "movies"
                      | "english"
                      | "italian"

export type Link = {
  name: string;
  url: string;
  icon: string;
}

export type Links = {
  [key in Category]?: Array<Link>;
};