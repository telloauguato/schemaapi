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
  email: async props => {
    const { suffix = '', prefix = '' } = props
    const { results } = await gets.data('https://randomuser.me/api/?inc=email&noinfo')
    const { email } = results[0]
    return `${prefix}${email}${suffix}`
  },
  phone: async props => {
    const { suffix = '', prefix = '' } = props
    const { results } = await gets.data('https://randomuser.me/api/?inc=phone&noinfo')
    const { phone } = results[0]
    return `${prefix}${phone}${suffix}`
  },
  cell: async props => {
    const { suffix = '', prefix = '' } = props
    const { results } = await gets.data('https://randomuser.me/api/?inc=cell&noinfo')
    const { cell } = results[0]
    return `${prefix}${cell}${suffix}`
  },
  avatar: async props => { 
    const { seed = 'schemaapi', sprites = 'human', background = 'ffffff' } = props    
    return `https://avatars.dicebear.com/api/${sprites}/${seed}.svg?background=%23${background}`
  }

}

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
