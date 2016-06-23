import Types from './types'

export const startup = () => ({ type: Types.STARTUP })
export const watchLocation = () => ({ type: Types.WATCH_LOCATION });
export const unwatchLocation = () => ({ type: Types.UNWATCH_LOCATION });
export const runsFetchSuccess = (torch, runs) => ({ type: Types.RUNS_FETCH_SUCCESS, torch, runs })
