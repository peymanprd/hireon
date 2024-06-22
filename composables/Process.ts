/**
 *
 *
 *
 */

type ProcessMode = 'development' | 'production'

export const useProcess = (fn: Function, mode: ProcessMode = 'development') => {
  if (process.env.NODE_ENV === mode) fn()
}
