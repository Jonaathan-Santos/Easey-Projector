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

export default {resetStorage, setStorage, getStorage, initStorage}



