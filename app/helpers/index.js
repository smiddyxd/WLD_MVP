export const getS = (key) => {
  return new Promise((res, rej) => {
    chrome.storage.sync.get(key, data => {
      res(data)
    })
  })
}

export const setS = (data) => {
  return new Promise((res, rej) => {
    chrome.storage.sync.set(data)
  })
}
