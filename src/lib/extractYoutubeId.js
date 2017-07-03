const ID_REGEX = /v=([\w-]+)/

const extractYoutubeId = (link) => {
  const match = link.match(ID_REGEX)
  console.log(match[1])

  return match[1]
}

export default extractYoutubeId
