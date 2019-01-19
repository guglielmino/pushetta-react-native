import React from 'react';

import { View, FlatList, Text } from 'react-native';
import { RkText, RkStyleSheet } from 'react-native-ui-kitten';

export interface Props {
  /*
   navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    */
}

export class MainScreen extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <RkText>Pushetta</RkText>
        <FlatList
          data={[{ key: 'Menu1' }, { key: 'Menu2' }, { key: 'Menu3' }]}
          renderItem={({ item }) => <Text style={styles.componentRow}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.screen.base,
  },
  componentRow: {
    paddingHorizontal: 24,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowSeparator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
  },
}));
