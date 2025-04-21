<script>
    import logoPng  from '$lib/assets/Sailor.png?url';
    import logoWebp from '$lib/assets/Sailor.webp?url';
</script>

<header class="site-header" role="banner">
    <div class="container nav-wrapper">
        <a class="brand" href="/" aria-label="Go to homepage">
            <picture>
                <source srcset={logoWebp} type="image/webp" />
                <img src={logoPng} alt="My Daily Journal logo" width="32" height="32" />
            </picture>
            <span class="brand-text">My Daily Journal</span>
        </a>

        <nav class="site-nav" aria-label="Main navigation">
            <ul class="nav-links">
                <li><a href="/" class="nav-link">Home</a></li>
                <!-- future links -->
            </ul>
        </nav>
    </div>
</header>

<style>
    /* ─── BRAND / RESET ─────────────────────────────────────────── */
    .site-header {
        background-color: var(--clr-black);
        color: var(--clr-white);
        padding: 0.5rem 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        position: sticky;
    }

    .nav-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    /* ─── BRAND ─────────────────────────────────────────────────── */
    .brand {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: inherit;
    }

    .brand img {
        display: block;
        width: 32px;
        height: 32px;
    }

    .brand-text {
        font-size: 1.25rem;
        font-weight: 600;
    }

    /* ─── NAV LINKS ────────────────────────────────────────────── */
    .site-nav {}

    .nav-links {
        list-style: none;
        display: flex;
        gap: 1.5rem;
        margin: 0;
        padding: 0;
    }

    .nav-link {
        color: var(--clr-white);
        font-size: 1rem;
        font-weight: 500;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        text-decoration: none;
        transition: background-color 0.2s, color 0.2s;
    }

    .nav-link:hover,
    .nav-link:focus {
        background-color: var(--clr-white);
        color: var(--clr-black);
        outline: none;
    }

    .nav-link:focus-visible {
        box-shadow: 0 0 0 3px var(--clr-accent);
    }

    /* ─── RESPONSIVE ADJUSTMENTS ───────────────────────────────── */
    @media (max-width: 600px) {
        .brand-text { font-size: 1rem; }
        .nav-links { gap: 1rem; }
    }
</style>
