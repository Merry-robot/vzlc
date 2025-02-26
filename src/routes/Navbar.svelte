<script>
    import logo from '../lib/images/logo.png';

    
    
    // Use Vite's environment variable syntax
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_REDIRECT_URI;
    const scopes = 'full_name email vatsim_details country';

    if (!clientId || !redirectUri) {
        throw new Error('Missing VITE_CLIENT_ID or VITE_REDIRECT_URI in environment variables');
    }

    const authUrl = `https://auth.vatsim.net/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;

    function login() {
        window.location.href = authUrl;
    }
</script>

<style>
    nav {
        background-color: #a86629;
        padding: 10px; 
        display: flex;
        align-items: center;
    }

    img {
        height: 40px;
        width: auto;
        margin-right: 15px;
    }

    a {
        color: white;
        text-decoration: none;
        padding: 10px 15px;
        cursor: pointer;
    }

    a:hover {
        background-color: #ddd;
        color: black;
    }
</style>

<nav>
    <img src={logo} alt="Logo" />
    <div id="navtext" class="ml-auto">
        <a href="/">Home</a>
        <a href="/feedback">Feedback</a>
        <a href="/facility">Facility</a>
        <a href="" on:click={login}>Login</a>
    </div>  
</nav>
