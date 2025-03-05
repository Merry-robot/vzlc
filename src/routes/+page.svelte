<script>
    import { onDestroy } from 'svelte';
    import { isAuthenticated } from '../lib/stores/auth.js';
    import Navbar from './Navbar.svelte';
    import NavbarLoggedIn from './Navbar-logged-in.svelte';

    let auth = false;

    // Subscribe to the store properly
    const unsubscribe = isAuthenticated.subscribe(value => {
        auth = value;
    });

    // Unsubscribe when the component is destroyed
    onDestroy(() => {
        unsubscribe();
    });
</script>

{#if auth}
    <NavbarLoggedIn />
{:else}
    <Navbar />
{/if}

<div id="body">
    
</div>
