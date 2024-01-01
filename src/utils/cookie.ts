import dayjs from 'dayjs';

import { COOKIE_CACHE_DAYS } from '@/constants/common';

export const setCookie = (key: string, value: string | undefined) => {
  const expires = dayjs().add(COOKIE_CACHE_DAYS, 'day').toISOString();

  document.cookie = `${key}=${value};expires=${expires};path=/;`;
};
