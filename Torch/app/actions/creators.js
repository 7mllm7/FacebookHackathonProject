import Types from './types'

export const startup = () => ({ type: Types.STARTUP })

export const runsFetchSuccess = (torch, runs) => ({ type: Types.RUNS_FETCH_SUCCESS, torch, runs })