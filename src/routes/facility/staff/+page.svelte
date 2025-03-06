<script>
	import { onMount } from "svelte";
	import Navbar from "../../Navbar.svelte";

	/**
	 * @type {string | any[]}
	 */
	let staff = [];

	async function fetchStaff() {
		try {
			const response = await fetch("http://localhost:5050/staff");
			if (!response.ok) {
				throw new Error("Failed to fetch staff data");
			}
			staff = await response.json();
		} catch (error) {
			console.error("Error fetching staff:", error);
		}
	}

	onMount(fetchStaff);
</script>

<Navbar />

<main>
	<h1>Facility Staff</h1>
	{#if staff.length > 0}
		<ul>
			{#each staff as member}
				<li>
					<strong>{member.fname} {member.lname}</strong> - {member.position}
				</li>
			{/each}
		</ul>
	{:else}
		<p>Loading staff data...</p>
	{/if}
</main>
