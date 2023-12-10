import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => ({
  author: css`
    font-size: 12px;
  `,

  avatar: css`
    flex: none;
  `,
  container: css`
    position: relative;
    padding: 16px 16px 24px;
    border-bottom: 1px solid ${token.colorBorderSecondary};
  `,
  footer: css`
    overflow-y: auto;
    white-space: break-spaces;
    height: 300px;
    padding: 8px;
  `,
  date: css`
    font-size: 12px;
    color: ${token.colorTextDescription};
  `,
  desc: css`
    color: ${token.colorTextDescription};
    text-align: center;
  `,

  title: css`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;
  `,
}));
