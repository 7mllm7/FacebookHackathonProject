import Types from '../actions/types';
let watchID;

function watchLocation(updateLocation) {
  console.log("Start Watch");
  if (watchID) return;

  navigator.geolocation.getCurrentPosition(
    (position) => updateLocation(position),
    (error) => alert(error.message),
    {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000
    }
  );

  watchID = navigator.geolocation.watchPosition(position => updateLocation(position));
}

function unwatchLocation() {
  console.log("Stop Watch");
  if (!watchID) return;

  navigator.geolocation.clearWatch(watchID);

  watchID = null;
}

const locationMiddleware = ({ dispatch }) => next => action => {
  switch (action.type) {
    case Types.WATCH_LOCATION:
      watchLocation(payload => dispatch({ type: 'SET_LOCATION', payload }))
      break;

    case Types.UNWATCH_LOCATION:
      unwatchLocation();
      break;
  }

  return next(action);
};

export default locationMiddleware;