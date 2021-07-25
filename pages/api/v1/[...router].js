
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

  router.shift()
  //const schema = router.join('/')
  const schema = router[0]
  const url = `https://raw.githubusercontent.com/${user}/${repo}/main/${schema}.schema.json`

  const data = await getData(url)
  const { amount = 10, content = [] } = data
  const randomUser = await getData(`https://randomuser.me/api/?results=${data.amount}${data.lang ? '&nat=' + data.lang : ''}`)
  datas.randonUser = randomUser.results


  let returns = []

  for (let i = 0; i < amount; i++) {

    const person = datas.randonUser[i]

    for (let j = 0; j < content.length; j++) {

      const { key, type, suffix = '', prefix = '', options = [], max = 1000, min = 0 } = content[j];
      var result

      switch (type) {
        case "name":
          result = { [key]: `${prefix}${person.name.first} ${person.name.last}${suffix}` }
          break;

        case "gender":
          result = { [key]: `${prefix}${person.gender}${suffix}` }
          break;

        case "username":
          result = { [key]: `${prefix}${person.login.username}${suffix}` }
          break;

        case "options":
          result = { [key]: `${prefix}${options[Math.floor(Math.random() * options.length)]}${suffix}` }
          break;

        case "street":
          result = { [key]: `${prefix}${person.location.street.name}, ${person.location.street.number}${suffix}` }
          break;

        case "city":
          result = { [key]: `${prefix}${person.location.city}${suffix}` }
          break;

        case "state":
          result = { [key]: `${prefix}${person.location.state}${suffix}` }
          break;

        case "country":
          result = { [key]: `${prefix}${person.location.country}${suffix}` }
          break;

        case "address":
          result = { [key]: `${prefix}${person.location.street.name}, ${person.location.street.number} - ${person.location.city}, ${person.location.state} - ${person.location.country}${suffix}` }
          break;

        case "email":
          result = { [key]: `${prefix}${person.email}${suffix}` }
          break;

        case "phone":
          result = { [key]: `${prefix}${person.phone}${suffix}` }
          break;

        case "cell":
          result = { [key]: `${prefix}${person.cell}${suffix}` }
          break;

        case "avatar":
          result = { [key]: person.picture }
          break;

        case "int":
          result = { [key]: Math.floor(Math.random() * (max - min + 1)) }
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
