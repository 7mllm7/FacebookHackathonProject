import React, { Component }  from 'react';
import { Provider, connect } from 'react-redux';
import { Scene, Router }     from 'react-native-router-flux';
import store                 from './store';
import Launch                from './screens/Launch';
import TorchMap              from './screens/TorchMap';
import Runs                  from './screens/Runs';

import TabIcon               from './components/TabIcon';

const RouterWithRedux = connect()(Router);

const getSceneStyle = function (props, computedProps) {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = 64;
    style.marginBottom = 50;
  }
  return style;
};

const App = () => {

  return (
    <Provider store={ store }>
      <RouterWithRedux getSceneStyle={getSceneStyle}>
          <Scene key="root" hideNavBar hideTabBar>
            <Scene key="launch" component={ Launch } title="Launch" initial={ true }/>
            <Scene key="main" tabs={true} duration={0} tabBarStyle={ styles.tabStyle }>
                <Scene key="torchMap"
                       title="TorchMap"
                       icon={ TabIcon('map-marker') }
                       component = { TorchMap }/>
                <Scene key="runs"
                       title="Runs"
                       icon={ TabIcon('users') }
                       component={ Runs }/>
            </Scene>
          </Scene>
      </RouterWithRedux>
    </Provider>
  );
};


const styles = {
  navigation: {
    backgroundColor: "gray"
  },
  tabStyle: {
    borderTopWidth: 1,
    borderColor: "#CCCCCC"
  }
};

export default App;