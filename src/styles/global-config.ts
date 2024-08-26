/* eslint-disable no-template-curly-in-string */

import type { ConfigProviderProps } from 'antd/es/config-provider';

export const GlobalStyleConfig: ConfigProviderProps = {
  theme: {
    components: {
      Menu: {
        subMenuItemBg: 'transparent',
        itemMarginInline: 0,
      },
      Typography: {
        titleMarginBottom: 0,
        titleMarginTop: 0,
      },
    },
  },
  form: {
    validateMessages: {
      required: '${label} is required!',
    },
  },
  pagination: {
    showSizeChanger: true,
  },
};
