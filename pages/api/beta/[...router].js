async function getData(url) {
  return await fetch(url)
    .then(data => data.json())
}

const typed = type => {
  switch (type) {
    case "name":
      return { [key]: `${prefix}${person.name.first} ${person.name.last}${suffix}` }
      break;

    case "gender":
      return { [key]: `${prefix}${person.gender}${suffix}` }
      break;

    case "username":
      return { [key]: `${prefix}${person.login.username}${suffix}` }
      break;

    case "options":
      return { [key]: `${prefix}${options[Math.floor(Math.random() * options.length)]}${suffix}` }
      break;

    case "street":
      return { [key]: `${prefix}${person.location.street.name}, ${person.location.street.number}${suffix}` }
      break;

    case "city":
      return { [key]: `${prefix}${person.location.city}${suffix}` }
      break;

    case "state":
      return { [key]: `${prefix}${person.location.state}${suffix}` }
      break;

    case "country":
      return { [key]: `${prefix}${person.location.country}${suffix}` }
      break;

    case "address":
      return { [key]: `${prefix}${person.location.street.name}, ${person.location.street.number} - ${person.location.city}, ${person.location.state} - ${person.location.country}${suffix}` }
      break;

    case "email":
      return { [key]: `${prefix}${person.email}${suffix}` }
      break;

    case "phone":
      return { [key]: `${prefix}${person.phone}${suffix}` }
      break;

    case "cell":
      return { [key]: `${prefix}${person.cell}${suffix}` }
      break;

    case "avatar":
      return { [key]: person.picture }
      break;

    case "int":
      return { [key]: Math.floor(Math.random() * (max - min + 1)) }
      break;

    default:
      break;
  }
}

export default async (req, res) => {

  let datas = {}
  const { router } = req.query
  const split = router[0].split("@")

  const user = split[1]
  const repo = split[0]

  router.shift()

  const schema = router.join('/')
  const url = `https://raw.githubusercontent.com/${user}/${repo}/master/${schema}.schema.json`

  const data = await getData(url)
  const { length = 2, content = [] } = data
  
  res
    .status(200)
    .json(
     data
    )
}
