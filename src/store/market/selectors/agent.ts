import { MarketStore } from '@/store/market';
import { Agent } from '@/types/agent';

const showSideBar = (s: MarketStore) => !!s.currentAgentId;

const currentAgentItem = (s: MarketStore): Agent | undefined => {
  const { currentAgentId, agentList } = s;
  const currentAgent = agentList.find((item) => item.name === currentAgentId);
  if (!currentAgent) return undefined;

  return currentAgent;
};

export const agentSelectors = {
  showSideBar,
  currentAgentItem,
};
