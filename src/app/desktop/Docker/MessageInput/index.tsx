import useChatInput from '@/hooks/useSendMessage';
import { useSessionStore } from '@/store/session';
import { isCommandPressed } from '@/utils/keyboard';
import { Input } from '@lobehub/ui';
import { Button, Space } from 'antd';
import { createStyles } from 'antd-style';
import { InputRef } from 'antd/es/input/Input';
import { memo, useRef } from 'react';

const useStyles = createStyles(({ css }) => {
  return {
    textarea: css`
      width: 360px;
    `,
  };
});

const InputArea = memo<{ setExpand?: (expand: boolean) => void }>(() => {
  const { styles } = useStyles();
  const ref = useRef<InputRef>(null);
  const isChineseInput = useRef(false);
  const onSend = useChatInput();

  const [loading, messageInput, setMessageInput] = useSessionStore((s) => [
    !!s.chatLoadingId,
    s.messageInput,
    s.setMessageInput,
  ]);

  return (
    <Space>
      <Input
        autoFocus
        className={styles.textarea}
        onBlur={(e) => {
          setMessageInput?.(e.target.value);
        }}
        onChange={(e) => {
          setMessageInput?.(e.target.value);
        }}
        onCompositionEnd={() => {
          isChineseInput.current = false;
        }}
        onCompositionStart={() => {
          isChineseInput.current = true;
        }}
        onPressEnter={(e) => {
          if (loading || e.shiftKey || isChineseInput.current) return;

          if (isCommandPressed(e)) {
            setMessageInput?.((e.target as any).value + '\n');
            return;
          }

          e.preventDefault();
          onSend();
        }}
        ref={ref}
        placeholder="请输入内容开始聊天"
        type={'block'}
        value={messageInput}
      />
      <Button
        type="primary"
        onClick={() => {
          if (loading) return;
          onSend();
        }}
      >
        发送
      </Button>
    </Space>
  );
});

export default InputArea;
