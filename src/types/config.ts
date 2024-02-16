import { PrimaryColors } from '@lobehub/ui';

export type BackgroundEffect = 'sakura' | 'snow' | 'star' | 'none';

export interface Panel {
  open: boolean;
}

export interface PanelConfig {
  agent: Panel;
  role: Panel;
  market: Panel;
  dance: Panel;
  live: Panel;
  chat: Panel;
  config: Panel;
}

export type PanelKey = keyof PanelConfig;

export interface CommonConfig {
  /**
   * 主题色
   */
  primaryColor: PrimaryColors;
  /**
   * 背景类型
   */
  backgroundEffect: BackgroundEffect;
}

export interface OpenAIConfig {
  apikey?: string;
  endpoint?: string;
  model?: string;
}

export interface LanguageModelConfig {
  openAI: OpenAIConfig;
}

export interface Config extends CommonConfig {
  languageModel: LanguageModelConfig;
}
