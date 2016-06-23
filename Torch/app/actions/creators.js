import Types from './types'

function rand() {
  return Math.random();
}

export const startup = () => ({ type: Types.STARTUP })
export const watchLocation = () => ({ type: Types.WATCH_LOCATION });
export const unwatchLocation = () => ({ type: Types.UNWATCH_LOCATION });
export const runsFetchSuccess = (torch, runs) => ({ type: Types.RUNS_FETCH_SUCCESS, torch, runs })
export const pickup = () => ({ type: Types.PICKUP });
export const drop = ({ coords }) => {

  return {
    type: Types.DROP, destination: { latitude: coords.latitude + rand(), longitude: coords.longitude + rand() }
  };
}