import Types from './types'

export const startup = () => ({ type: Types.STARTUP })

export const runsFetchSuccess = (runs) => ({ type: Types.RUNS_FETCH_SUCCESS, runs })