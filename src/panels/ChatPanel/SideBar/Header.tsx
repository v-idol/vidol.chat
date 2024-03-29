import { useConfigStore } from '@/store/config';
import { ActionIcon, SearchBar } from '@lobehub/ui';
import { Plus } from 'lucide-react';
import { memo } from 'react';
import { useStyles } from './style';

interface HeaderProps {
  value?: string;
  onChange?: (value: string) => void;
}

// eslint-disable-next-line react/display-name
const Header = memo((props: HeaderProps) => {
  const { value, onChange } = props;
  const { styles } = useStyles();
  const openPanel = useConfigStore((s) => s.openPanel);

  return (
    <div className={styles.header}>
      <SearchBar
        shortKey="f"
        enableShortKey
        placeholder="搜索"
        value={value}
        onChange={(e) => {
          if (onChange) onChange(e.target.value);
        }}
      />
      {/* @ts-ignore */}
      <ActionIcon icon={Plus} onClick={() => openPanel('agent')} title={'找人聊天'} />
    </div>
  );
});

export default Header;
