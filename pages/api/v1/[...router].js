
async function getData(url) {
  return await fetch(url)
    .then(data => data.json())
}

export default async (req, res) => {

  let datas = {}


  const { router } = req.query

  const split = router[0].split("@")

  const user = split[1]
  const repo = split[0]
  const schema = router[1]
  const url = `https://raw.githubusercontent.com/${user}/${repo}/main/${schema}.schema.json`

  const data = await getData(url)

  const randomUser = await getData(`https://randomuser.me/api/?results=${data.amount}&nat=${data.lang ? data.lang : 'US'}`)
  datas.randonUser = randomUser.results


  let returns = []

  for (let i = 0; i < data.amount; i++) {



    for (let j = 0; j < data.content.length; j++) {

      const { key, type, suffix = '', prefix = '', options = [] } = data.content[j];
      var result

      switch (type) {
        case "name":
          result = { [key]: `${prefix}${datas.randonUser[i].name.first} ${datas.randonUser[i].name.last}${suffix}` }
          break;

        case "username":
          result = { [key]: `${prefix}${datas.randonUser[i].login.username}${suffix}` }
          break;

        case "options":
          result = { [key]: `${prefix}${options[Math.floor(Math.random() * options.length)]}${suffix}` }
          break;

        default:
          break;
      }
      returns[i] = { ...returns[i], ...result }
    }
  }

  res
    .status(200)
    .json({
      //data,
      //datas,
      results: returns
    })
}
