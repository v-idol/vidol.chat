import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  vrm: css`
    height: calc(100vh - 64px);
  `,
}));

export { useStyles };
