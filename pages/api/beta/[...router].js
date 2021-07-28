String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.substr(1);
}
const gets = {
  data: async url => {
    return await fetch(url)
      .then(data => data.json())
  },
  name: async props => {
    const { suffix = '', prefix = '' } = props
    const { results } = await gets.data('https://randomuser.me/api/?inc=name&noinfo')
    const { name: { first, last } } = results[0]
    return `${prefix}${first} ${last}${suffix}`
  },
  int: async props => {
    const { suffix = '', prefix = '', min = 0, max = 1000 } = props
    return `${prefix}${Math.floor(Math.random() * (max - min + 1))}${suffix}`
  },
  gender: async props => {
    const { suffix = '', prefix = '' } = props
    const { results } = await gets.data('https://randomuser.me/api/?inc=gender&noinfo')
    const { gender } = results[0]
    return `${prefix}${gender}${suffix}`
  },
  username: async props => {
    const { suffix = '', prefix = '' } = props
    const { results } = await gets.data('https://randomuser.me/api/?inc=login&noinfo')
    const { login: { username } } = results[0]
    return `${prefix}${username}${suffix}`
  },
  options: async props => {
    const { suffix = '', prefix = '', options = [] } = props
    return `${prefix}${options[Math.floor(Math.random() * options.length)]}${suffix}`
  },
  street: async props => {
    const { suffix = '', prefix = '' } = props
    const { results } = await gets.data('https://randomuser.me/api/?inc=location&noinfo')
    const { location: { street: { name, number } } } = results[0]
    return `${prefix}${name}, ${number}${suffix}`
  },
  city: async props => {
    const { suffix = '', prefix = '' } = props
    const { results } = await gets.data('https://randomuser.me/api/?inc=location&noinfo')
    const { location: { city } } = results[0]
    return `${prefix}${city}${suffix}`
  },
  state: async props => {
    const { suffix = '', prefix = '' } = props
    const { results } = await gets.data('https://randomuser.me/api/?inc=location&noinfo')
    const { location: { state } } = results[0]
    return `${prefix}${state}${suffix}`
  },
  country: async props => {
    const { suffix = '', prefix = '' } = props
    const { results } = await gets.data('https://randomuser.me/api/?inc=location&noinfo')
    const { location: { country } } = results[0]
    return `${prefix}${country}${suffix}`
  },
  address: async props => { },
  email: async props => { },
  phone: async props => { },
  cell: async props => { },
  avatar: async props => { }

}

/**
  const { type, suffix = '', prefix = '', options = [], max = 1000, min = 0 } = props

    case "street":
      return `${prefix}${person.location.street.name}, ${person.location.street.number}${suffix}`
      break;

    case "city":
      return `${prefix}${person.location.city}${suffix}`
      break;

    case "state":
      return `${prefix}${person.location.state}${suffix}`
      break;

    case "country":
      return `${prefix}${person.location.country}${suffix}`
      break;

    case "address":
      return `${prefix}${person.location.street.name}, ${person.location.street.number} - ${person.location.city}, ${person.location.state} - ${person.location.country}${suffix}`
      break;

    case "email":
      return `${prefix}${person.email}${suffix}`
      break;

    case "phone":
      return `${prefix}${person.phone}${suffix}`
      break;

    case "cell":
      return `${prefix}${person.cell}${suffix}`
      break;

    case "avatar":
      return person.picture
      break;
 */
export default async (req, res) => {
  const { router } = req.query
  const split = router[0].split("@")

  const user = split[1]
  const repo = split[0]

  router.shift()

  const schema = router.join('/')
  const url = `https://raw.githubusercontent.com/${user}/${repo}/master/${schema}.schema.json`

  const data = await gets.data(url)
  const { length = 1, content = [] } = data
  var result = {}
  for (let i = 0; i < content.length; i++) {
    const e = content[i];
    const { key, type } = e
    result = { ...result, [key]: await gets[type](e) }
  }

  res
    .status(200)
    .json(
      { ...result }
    )
}
