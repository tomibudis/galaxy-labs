import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import '../lib/styles.css';
import 'react-dates/lib/css/_datepicker.css';

export const parameters = {
  previewTabs: {
    canvas: {
      hidden: true,
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'docs',
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <Stories />
        <ArgsTable story={PRIMARY_STORY} />
      </>
    ),
  },
};
