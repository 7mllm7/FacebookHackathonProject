import React       from 'react';
import { Actions } from "react-native-router-flux";
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  TouchableHighlight
} from 'react-native';

class Runs extends React.Component {

  populateRowData(rowData) {
    const { description, location, index } = rowData;
    const { row, content } = styles;
    return (
      <TouchableHighlight onPress={() => Actions.singleRun({ index })}>
        <View style={ row }>
          <View style={ content }>
            <Image source={{uri: rowData.userImage,
                width: 65,
                height: 65}}
            />
            <Text>{ rowData.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  };

  separator(sectionId, rowId) {
    return <View key={`${sectionId}-${rowId}`} style={ styles.separator } />;
  };

  render() {
    const ds       = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const listData = ds.cloneWithRows(this.props.runs);
    return (
        <ListView dataSource={ listData }
                  renderSeparator={ this.separator }
                  renderRow={ this.populateRowData }
                  contentContainerStyle={styles.container}
                  />
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 10
  },
  talk: {
    fontWeight: 'bold'
  },
  speaker: {
    fontStyle: 'italic'
  }
});



export default connect(({ runs: { list } }) => ({ runs: list.map((run, index) => ({ ...run, index })) }))(Runs);;