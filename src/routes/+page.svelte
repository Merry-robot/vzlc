<script>
    import { isAuthenticated } from '../lib/stores/auth.js';
    import Navbar from './Navbar.svelte';
    import NavbarLoggedIn from './Navbar-logged-in.svelte';
    
    let auth = false;
    $: isAuthenticated.subscribe(value => {
        auth = value;
    });
</script>
{#if auth}
    <NavbarLoggedIn />
{:else}
    <Navbar />
{/if}

<div id="body">

    

</div>
