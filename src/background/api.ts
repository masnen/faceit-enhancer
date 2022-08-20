import ky from 'ky'

const BASE_URL = 'https://api.faceit-enhancer.com'

const api: typeof ky = ky.extend({ prefixUrl: BASE_URL })

const BANS = atob('YmFucw==')

export const fetchBan = (guid: string) => api(`${BANS}?guid=${guid}`).json()

export const fetchVips = (guids: string[]) =>
  api(`vips?guid=${Array.isArray(guids) ? guids.join('&guid=') : guids}`).json()

export default api
