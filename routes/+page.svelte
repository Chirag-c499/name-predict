<script>
	import axios from 'axios';
	import Result from '../components/result.svelte';

	let name = '';
	let apiData = null;
	let error = null;
	let loading = false;

	const fetchData = async () => {
		if (!name.trim()) {
			error = 'Please enter a name.';
			apiData = null;
			return;
		}

		loading = true;
		error = null;
		apiData = null;

		try {
			const response = await axios.get(`https://api.nationalize.io?name=${name}`);
			apiData = response.data;
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	};
</script>

<div class="container">
	<h1>🌍 Name Nationality Predictor</h1>

	<input bind:value={name} type="text" placeholder="Enter a name" />
	<br />
	<button on:click={fetchData}>Predict</button>

	{#if loading}
		<p>Loading...</p>
	{:else if error}
		<p style="color: red;">❌ {error}</p>
	{:else if apiData}
		<h2>Predictions for: <strong>{apiData.name}</strong></h2>
		<ul>
			<li>
				<Result data={apiData.country} />
			</li>
		</ul>
	{/if}
</div>

<style>
	.container {
		max-width: 500px;
		margin: 2rem auto;
		padding: 1.5rem;
		border-radius: 12px;
		background: #f9f9f9;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		text-align: center;
		font-family: sans-serif;
	}
	input {
		padding: 0.5rem;
		width: 70%;
		border-radius: 6px;
		border: 1px solid #ccc;
		margin-bottom: 1rem;
	}
	button {
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 6px;
		background-color: #007bff;
		color: white;
		cursor: pointer;
	}
	button:hover {
		background-color: #0056b3;
	}
	ul {
		text-align: left;
		padding-left: 0;
	}
	li {
		list-style: none;
		margin: 0.5rem 0;
	}
</style>
