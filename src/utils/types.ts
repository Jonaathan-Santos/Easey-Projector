
export interface payload {
  image?: string
  lyric?: string[]
  state?: boolean
  index?: number
  isPaused?: boolean
}
export interface ConfigType{
  target: "LYRIC" | "IMAGE" | "STATE"|  "INDEX" | "ISPAUSED";
  payload?: payload
}