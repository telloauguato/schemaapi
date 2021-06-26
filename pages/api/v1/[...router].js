export default async (req, res) => {

  async function getData (url) {
    return await fetch(url)
    .then(data => data.json())
  }

  const { router } = req.query

  const split = router[0].split("@")

  const user = split[1]
  const repo = split[0]
  const schema = router[1]
  const url = `https://raw.githubusercontent.com/${user}/${repo}/main/${schema}.schema.json`

  const data = await getData(url)

  res
    .status(200)
    .json({
      user,
      repo,
      schema,
      url,
      data
    })
}
