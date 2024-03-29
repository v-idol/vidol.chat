import { ChatMessage } from '@/types/chat';
import { DefaultMessage } from './Default';

export type RenderMessage = React.FC<ChatMessage & { editableContent: React.ReactNode }>;

export const renderMessages: Record<string, RenderMessage> = {
  default: DefaultMessage,
  user: DefaultMessage,
  assistant: DefaultMessage,
};
