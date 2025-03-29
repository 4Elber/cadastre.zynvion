import axios from 'axios'

const api = axios.create({
    baseURL: 'https://cadastre-zynvion.onrender.com/users'
})

export default api