const superagent = require('superagent');

const url = 'https://www.linkedin.com/oauth/v2/accessToken'
const grant_type = 'client_credentials'


export default function getToken () {
 return superagent.post(`${url}?grant_type=${grant_type}&client_id=${process.env.LINKEDIN_ID}&client_secret=${process.env.LINKEDIN_SECRET}`)
    .then(value => value)
    .catch(console.warn)
}