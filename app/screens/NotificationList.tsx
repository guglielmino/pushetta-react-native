import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { NotificationCard } from './NotificationCard';

interface Props {
  data: Array<any>;
}

export class NotificationList extends Component<Props> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <FlatList
          data={this.props.screenProps}
          renderItem={({ item }) => (
            <NotificationCard
              text={item.body}
              title={item.channel.name}
              expire={item.expire}
              channelIconUrl={item.channel.image}
              previewUrl={item.preview_url}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionTitle: { fontSize: 22 },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
