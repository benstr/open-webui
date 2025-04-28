import { WEBUI_BASE_URL } from '$lib/constants';

export function getBotAvatarSrc(theme: string) {
  if (theme === 'hackster') {
    return `${WEBUI_BASE_URL}/static/hackster-blue.png`;
  }
  return `${WEBUI_BASE_URL}/static/favicon.png`;
} 