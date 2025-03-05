<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { isAuthenticated } from '$lib/stores/auth.js';

    onMount(() => {
        // Simulate handling the auth response
        setTimeout(() => {
            isAuthenticated.set(true);
            goto('/'); // Redirect to homepage
        }, 1000);
    });
</script>

<p>Logging you in...</p>
