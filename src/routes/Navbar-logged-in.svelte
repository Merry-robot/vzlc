<script>
    import logo from '../lib/images/logo.png';

    let showFacilityDropdown = false;
    let showUserDropdown = false;
</script>

<style>
    nav {
        background-color: #a86629;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    img {
        height: 40px;
        width: auto;
        margin-right: 20px;
    }

    .nav-links {
        display: flex;
        gap: 20px;
        align-items: center;
        margin-left: auto;
    }

    a {
        color: white;
        text-decoration: none;
        padding: 10px 15px;
        position: relative;
        display: inline-block;
    }

    a:hover {
        background-color: #ddd;
        color: black;
    }

    .dropdown-container {
        position: relative;
    }

    .dropdown {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #a86629;
        min-width: 160px;
        box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdown a {
        display: block;
        padding: 10px;
        color: white;
        text-decoration: none;
    }

    .dropdown a:hover {
        background-color: #8c5b1d;
    }

    .dropdown-container:hover .dropdown {
        display: block;
    }
</style>

<nav>
    <img src="{logo}" alt="Logo" />
    <div class="nav-links">
        <a href="/">Home</a>
        <div class="dropdown-container">
            <a href="/facility">Facility</a>
            <div class="dropdown">
                <a href="/facility/resources">Resources</a>
                <a href="/facility/activity">Activity</a>
                <a href="/facility/roster">Roster</a>
                <a href="/facility/staff">Staff</a>
            </div>
        </div>
        <a href="/contact">Feedback</a>
        <div class="dropdown-container">
            <a href="/user">User</a>
            <div class="dropdown">
                <a href="/user/logout">Logout</a>
            </div>
        </div>
    </div>
</nav>
