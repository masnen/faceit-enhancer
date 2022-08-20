import pRetry, { AbortError } from 'p-retry'

const BASE_URL = 'https://api.faceit.com'

export default async function faceitApi(path: string, options?: RequestInit) {
  const response = await pRetry(
    () =>
      fetch(`${BASE_URL}${path}`, options).then(res => {
        if (res.status === 404) {
          throw new AbortError(res.statusText)
        } else if (!res.ok) {
          throw new Error(res.statusText)
        }
        return res
      }),
    {
      retries: 3
    }
  )

  const json = await response.json()

  return json
}
