<script lang="ts">
	import { WEBUI_BASE_URL } from '$lib/constants';
	import { theme } from '$lib/stores';
	import { getBotAvatarSrc } from '$lib/utils/avatar';
	import { get } from 'svelte/store';

	export let className = 'size-8';
	export let src = '';

	$: currentTheme = get(theme);
	
	$: imageSrc = (() => {
		// If a user, gravatar, or data URL, use as is
		if (
			src &&
			(
				src.startsWith(WEBUI_BASE_URL) ||
				src.startsWith('https://www.gravatar.com/avatar/') ||
				src.startsWith('data:') ||
				src.startsWith('/user.png')
			)
		) {
			return src;
		}
		// If src is empty or the default favicon, use the theme-aware bot avatar
		if (!src || src.endsWith('/static/favicon.png')) {
			return getBotAvatarSrc(currentTheme);
		}
		// Otherwise, fallback to the provided src
		return src;
	})();
</script>

<img
	crossorigin="anonymous"
	src={imageSrc}
	class={className + " object-cover rounded-full -translate-y-[1px]"}
	alt="profile"
	draggable="false"
/>
