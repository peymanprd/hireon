import { type NitroFetchRequest } from 'nitropack'

export const useApi = <
  T = unknown,
  R extends NitroFetchRequest = NitroFetchRequest
>(
  request: Parameters<typeof useFetch<T, R>>[0],
  options?: Partial<Parameters<typeof useFetch<T, R>>[1]>
) => {
  const config = useRuntimeConfig()
  // const userStore = useUserStore()

  return useFetch<T, R>(request, {
    ...options,
    baseURL: config.public.apiBaseUrl,
    // credentials: 'include',
    mode: 'no-cors',
    headers: {
      // Authorization: userStore.authToken,
      Accept: 'application/json',
      // 'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      // Origin: window.location.origin,
      ...options?.headers
    },
    async onResponseError({ response }) {
      if (response.status === 401 || response.status === 403) {
        useProcess(() => {
          console.log('intercepting response error', response.status)
        })

        // userStore.logout()
      }
    }
  })
}
