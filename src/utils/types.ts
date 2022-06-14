
export interface payload {
  image?: string
  lyric?: string[]
  state?: boolean
  index?: number
}
export interface ConfigType{
  target: "LYRIC" | "IMAGE" | "STATE"|  "INDEX";
  payload?: payload
}