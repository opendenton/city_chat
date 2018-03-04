import Fuse from 'fuse.js'

const list = []

const options = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  // TODO: Replace with keys in records dictionary
  keys: ['title', 'author.firstName']
}

const fuse = new Fuse(list, options) // "list" is the item array

export default fuse
