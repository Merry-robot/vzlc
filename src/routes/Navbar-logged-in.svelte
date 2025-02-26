<script>
    // Import the image from the lib folder
    import logo from '../lib/images/logo.png';
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
    }

    a:hover {
        background-color: #ddd;
        color: black;
    }
</style>

<nav>
    <img src="{logo}" alt="Logo" />
    <div id="navtext" class="ml-auto">
        <a href="/">Home</a>
        <a href="/facility">Facility</a>
        <a href="/contact">Feedback</a>
        <a href="/user">User</a>
    </div>  
</nav>
