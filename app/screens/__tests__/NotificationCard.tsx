import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import { NotificationCard } from '../NotificationCard';

it('renders correctly with defaults', () => {
  const notificationCard = renderer
    .create(
      <NotificationCard
        title="A title"
        text="A text"
        expire="2018-12-15T11:59:25"
        channelIconUrl="http://www.pushetta.com/uploads/channel_media/22f1c8c9803f4a6a9765a050e1e9f22f.png"
        previewUrl="null"
      />,
    )
    .toJSON();
  expect(notificationCard).toMatchSnapshot();
});
