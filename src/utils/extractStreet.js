// This just grabs the street address
export default function(addressLike) {
  return /^\d+\s[A-z]+\s[A-z]+/.exec(addressLike)
}
