import axios from "axios"
import { STRAPI_HOST_URL } from "../../../../../config/strapiConfig"

export default (req , res) => {

    const { query } = req

    console.log(query.access_token)

    axios.get(`${STRAPI_HOST_URL}/auth/naver/callback?access_token=${query.access_token}`)
    .then(response => {
        console.log(response.data)
        res.redirect('/')
    })
    .catch(err => {
        
    })
}
