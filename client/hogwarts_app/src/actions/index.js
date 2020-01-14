
export const addSong = text => ({
  type: 'ADD_SONG',
  text
})
export const removeSong = song => ({
  type: 'REMOVE_SONG',
  song
})