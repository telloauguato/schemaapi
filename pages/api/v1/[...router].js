import { useRouter } from "next/router";

const { router } = useRouter().query

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: router })
}
