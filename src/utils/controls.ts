import { ConfigType } from "./types";


function setStorage(config: ConfigType){
  localStorage.setItem(config.target , JSON.stringify(config.payload))
}

function getStorage(config: ConfigType){
  let result = localStorage.getItem(config.target)
  return JSON.parse(result as string)
}

function resetStorage(config: ConfigType){
  localStorage.setItem(config.target, JSON.stringify({}))
}

function initStorage(){
  if(!localStorage.getItem("STATE")){

    localStorage.setItem("STATE", JSON.stringify({state: false}))

  }
}

function nextIndex(){
  if(getStorage({ target: "INDEX" }).index < (getStorage({ target: "LYRIC" }).lyric.length -1)){
    setStorage({target: 'INDEX', payload:{index: getStorage({ target: "INDEX" }).index + 1 }})
  }
  return getStorage({ target: "INDEX" }).index
}

function prevIndex(){
  if(getStorage({ target: "INDEX" }).index > 0){
    setStorage({target: 'INDEX', payload:{index: getStorage({ target: "INDEX" }).index - 1 }})
  }
  return getStorage({ target: "INDEX" }).index
}

export default {resetStorage, setStorage, getStorage, initStorage, prevIndex, nextIndex}



