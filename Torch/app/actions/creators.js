import Types from './types'

function rand() {
  return Math.random();
}

export const startup = () => ({ type: Types.STARTUP });
export const watchLocation = () => ({ type: Types.WATCH_LOCATION });
export const unwatchLocation = () => ({ type: Types.UNWATCH_LOCATION });
export const runsFetchSuccess = (torch, runs) => ({ type: Types.RUNS_FETCH_SUCCESS, torch, runs });
export const pickup = ({ coords }) => ({ type: Types.PICKUP, location: coords });
export const drop = ({ coords, name }) => {
  return {
    type: Types.DROP, name, destination: { latitude: coords.latitude + rand(), longitude: coords.longitude + rand() }
  };
};