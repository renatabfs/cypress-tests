import axios from 'axios'

export const BackEndClient = axios.create({
    baseURL: 'http://localhost:3000',
})
