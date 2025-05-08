import { randomDelay } from '@/utils/random-delay'
import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

const isDelayEnabled = import.meta.env.VITE_ENABLE_API_DELAY === 'true'

if (isDelayEnabled) {
  api.interceptors.request.use(async (config) => {
    await randomDelay(300, 1000) // random delay between 300ms and 1000ms

    return config
  })
}
