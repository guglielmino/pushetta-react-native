import { RkTheme } from 'react-native-ui-kitten';

const bootstrap = () => {
  RkTheme.setColor('accent', '#ed1c4d');

  // region RkChoice Types

  RkTheme.setType('RkChoice', 'magentaCyan', {
    inner: {
      tintColor: 'magenta',
    },
  });

  RkTheme.setType('RkChoice', 'magentaCyanSelected', {
    inner: {
      tintColor: 'cyan',
    },
  });

  RkTheme.setType('RkChoice', 'starSelected', {
    backgroundColor: 'transparent',
    inner: {
      imageSource: () => require('../img/star.png'),
      tintColor: '#00ad1c',
    },
  });

  RkTheme.setType('RkChoice', 'squadRadio', {
    borderRadius: 4,
  });

  RkTheme.setType('RkChoice', 'squadRadioSelected', {
    borderRadius: 4,
    inner: {
      backgroundColor: '#fc3630',
      tintColor: '#fc3630',
    },
  });

  RkTheme.setType('RkChoice', 'posNegClearCheck', {}, 'posNeg');

  RkTheme.setType(
    'RkChoice',
    'posNegClearCheckSelected',
    {
      inner: {
        tintColor: 'transparent',
      },
    },
    'posNegSelected',
  );

  RkTheme.setType('RkChoice', 'whiteGreenCheck', {
    backgroundColor: 'green',
  });

  RkTheme.setType('RkChoice', 'whiteGreenCheckSelected', {
    backgroundColor: 'green',
  });

  RkTheme.setType('RkChoice', 'helloClickMeSelected', {
    backgroundColor: '#bbf6ff',
    inner: {
      tintColor: '#005b69',
    },
  });

  // endregion

  // region RkText

  RkTheme.setType('RkText', 'bold', {});

  RkTheme.setType('RkText', 'caption', {
    color: theme => theme.colors.text.inverse,
  });

  RkTheme.setType('RkText', 'cardText', {
    fontSize: 16,
    text: {
      lineHeight: 20,
    },
  });

  RkTheme.setType('RkText', 'accent', {
    color: RkTheme.colors.accent,
  });

  RkTheme.setType('RkText', 'hint', {
    color: RkTheme.current.colors.text.hint,
  });

  RkTheme.setType('RkText', 'inverse', {
    color: RkTheme.current.colors.text.inverse,
  });

  RkTheme.setType('RkText', 'compactCardText', {
    fontSize: 14,
    text: {
      lineHeight: 20,
      letterSpacing: -0.1,
    },
  });

  // endregion Types

  // region RkButton Types

  RkTheme.setType('RkButton', 'basic', {});

  RkTheme.setType('RkButton', 'hitSlop', {
    hitSlop: {
      top: 5,
      left: 5,
      bottom: 5,
      right: 5,
    },
  });

  RkTheme.setType('RkButton', 'outline-success', {
    backgroundColor: 'transparent',
    borderColor: theme => theme.colors.success,
    borderWidth: 1,
    color: theme => theme.colors.success,
  });

  RkTheme.setType('RkButton', 'link', {
    fontSize: theme => theme.fonts.sizes.small,
    content: {
      letterSpacing: -0.1,
    },
  });

  RkTheme.setType('RkButton', 'action', {
    color: theme => theme.colors.warning,
    content: {},
  });

  RkTheme.setType('RkButton', 'accent', {
    color: RkTheme.colors.accent,
  });

  RkTheme.setType('RkButton', 'accent-bg', {
    backgroundColor: RkTheme.colors.accent,
  });

  // region RkSwitches Types

  RkTheme.setType('RkSwitch', 'redTint', {
    tintColor: theme => theme.colors.button.danger,
    onTintColor: theme => theme.colors.button.danger,
  });

  RkTheme.setType('RkSwitch', 'lightGreenThumb', {
    thumbTintColor: '#90ff6b',
    margin: 10,
  });

  // endregion

  RkTheme.setType('RkTab', 'basic', {
    inner: {},
  });

  RkTheme.setType('RkTab', 'noBorders', {
    container: {
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },
  });

  RkTheme.setType('RkCard', 'basic', {
    container: {
      marginVertical: 10,
    },
  });
};

export default bootstrap;
