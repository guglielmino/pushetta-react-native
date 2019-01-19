import React from 'react';

import {
  Image,
  NativeSegmentedControlIOSChangeEvent,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { RkButton, RkCard, RkText, RkTheme } from 'react-native-ui-kitten';

import Icon from 'react-native-vector-icons/FontAwesome';
interface Props {
  title: string;
  text: string;
  expire: string;
  channelIconUrl: string;
  previewUrl: string;
}

export class NotificationCard extends React.Component<Props> {
  public render() {
    return (
      <RkCard rkType="shadowed">
        <View style={styles.cardHeader} rkCardHeader={true}>
          <Image
            style={styles.channelIcon}
            rkCardImg={true}
            source={{ uri: this.props.channelIconUrl }}
          />
          <View style={styles.channelInfo}>
            <View style={styles.notificationTitle}>
              <RkText rkType="header" style={styles.channelName}>
                {this.props.title}
              </RkText>

              <Icon name="envelope-open" style={styles.readIcon} />
            </View>
            <RkText rkType="subtitle">Subtitle</RkText>
          </View>
        </View>
        {this.props.previewUrl ? (
          <Image
            rkCardImg={true}
            source={this.previewImage(this.props.previewUrl)}
            style={styles.contentImage}
            resizeMode="cover"
          />
        ) : null}
        <View rkCardContent={true}>
          <RkText rkType="cardText">{this.props.text}</RkText>
        </View>

        <View rkCardFooter={true}>
          <RkButton rkType="clear link">
            <Icon name="clock-o" style={styles.clockIcon} />
            <RkText rkType="accent">{this.formatDate(this.props.expire)}</RkText>
          </RkButton>
        </View>
      </RkCard>
    );
  }

  private formatDate(dateString: string) {
    const now = new Date();
    const expire = new Date(dateString);
    let ret = '-';
    const expireTime: Number = +expire - +now;
    if (expireTime < 1000 * 60 * 60 * 24) {
      ret = `expire in ${Math.round(+expireTime / (1000 * 60 * 60))} hours`;
    } else if (expireTime < 1000 * 60 * 60 * 24 * 15) {
      ret = `expire in ${Math.round(+expireTime / (1000 * 60 * 60 * 24))} days`;
    } else {
      const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
      ret = `expire on ${expire.toLocaleDateString('en-US', options)} `;
    }
    return ret;
  }

  private previewImage(url: string) {
    return url ? { uri: url } : require('../assets/img/pixel.png');
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f0f1f5',
    padding: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
  },
  // Channel Info Area
  channelInfo: {
    flexDirection: 'column',
  },
  channelIcon: {
    width: 40,
    height: 40,
    marginEnd: 10,
  },
  notificationTitle: {
    flex: 1,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  channelName: {
    flex: 1,
    width: 100,
  },
  readIcon: {
    color: RkTheme.current.colors.text.hint,
    fontSize: 19.7,
    flex: 1,
    width: 100,
  },
  // /Channel Info Area
  contentImage: { flex: 1, alignSelf: 'stretch', width: '100%', margin: 2, borderWidth: 0 },
  clockIcon: {
    color: RkTheme.current.colors.text.hint,
    paddingEnd: 2,
    fontSize: 19.7,
  },
});
