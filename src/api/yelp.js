import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer -yzITpEeN3M6YyNbZOV1owbZ3xDPjO6DmffKELHtgrs0T9tzKgjfnhm9oAbnE54reFE-HMXzsGnqk98CqRo3Btgl2zlJJ1VV2LXxU-j08Ij6bW8WCS9y6gi7z9bcXnYx'
    }
})