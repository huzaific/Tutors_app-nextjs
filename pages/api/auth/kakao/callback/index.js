
import axios from "axios"
import { STRAPI_HOST_URL } from "../../../../../config/strapiConfig"

export default (req , res) => {

    const { query } = req

    axios.get(`${STRAPI_HOST_URL}/auth/kakao/callback?access_token=${query.access_token}`)
    .then(response => {
        console.log(response.data)
        // res.redirect(`/signup?email=${response.data.user.email}&provider=kakao`)
        res.redirect('/')
    })
    .catch(err => {
        
    })
}