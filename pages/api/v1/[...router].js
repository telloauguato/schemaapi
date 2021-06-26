export default (req, res) => {

  const { router } = req.query

  res
    .status(200)
    .json({
      user: router[0],
      schema: router[1]
    })
}
