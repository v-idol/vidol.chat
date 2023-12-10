import { GridBackground } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import classNames from 'classnames';
import { Center } from 'react-layout-kit';
import DanceIndex from './DanceIndex';

const useStyles = createStyles(({ css }) => ({
  container: css`
    position: relative;
    display: flex;
    padding-bottom: 96px;
    width: 100%;
    height: 100%;
    min-height: 500px;
  `,
  content: css`
    padding-left: 24px;
    padding-right: 24px;
    flex-grow: 1;
    overflow-y: auto;
  `,
  background: css`
    width: 90%;
    margin: -24px 0 -12px;
  `,
  title: css`
    z-index: 2;
    margin-top: 24px;
    font-size: 36px;
    font-weight: 800;
  `,
}));

interface DanceProps {
  style?: React.CSSProperties;
  className?: string;
}

const Dance = (props: DanceProps) => {
  const { style, className } = props;
  const { theme, styles } = useStyles();
  return (
    <div style={style} className={classNames(className, styles.container)}>
      <div className={styles.content}>
        <Center>
          <h1 className={styles.title}>找到你心仪的舞蹈</h1>
          <GridBackground
            animation
            className={styles.background}
            colorFront={theme.colorText}
            random
          />
        </Center>
        <DanceIndex />
      </div>
    </div>
  );
};

export default Dance;
