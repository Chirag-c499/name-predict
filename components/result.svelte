<script>
	export let data;
	import { countryMap } from '../countryMap.js';

	function getCountryName(code) {
		return countryMap[code] || `Unknown (${code})`;
	}
</script>

<ul>
	{#each data as c}
		<li>
			🌐 {getCountryName(c.country_id)} – {Math.round(c.probability * 100)}%
		</li>
	{/each}
</ul>
