import axios from 'axios';

export default axios.create({
    headers:{
        'Access-Control-Allow-Origin': '*',
        Authorization:'Client-ID 83e756f351234aee6271dc1a6e71ce151c13cf8bcdec2bbe43d4c62630b0386c'
    },
    baseURL:'https://api.unsplash.com'
});