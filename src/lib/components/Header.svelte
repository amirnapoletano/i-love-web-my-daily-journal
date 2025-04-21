<script>
    import logoPng    from '$lib/assets/Sailor.png?url';
    import logoWebp   from '$lib/assets/Sailor.webp?url';
</script>

<header class="site-header">
    <nav class="container">
        <a class="brand" href="/">
            <picture>
                <source srcset={logoWebp} type="image/webp" />
                <img   src={logoPng}  alt="Logo" />
            </picture>
            <span>My Daily Journal</span>
        </a>

        <ul class="nav-links">
            <li><a href="/">Home</a></li>
            <!-- add About / Contact etc. later -->
        </ul>
    </nav>
</header>

<style>
/* ─── HEADER ─────────────────────────────────────────────────── */
.site-header {
    background: var(--clr-black);
    color: var(--clr-white);
}

.site-header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 0;
}

.brand {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    color: inherit;
    font-weight: 600;
}

.brand img {
    inline-size: 32px;
    block-size: 32px;
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav-links a {
    color: var(--clr-white);
    text-decoration: none;
    font-size: 0.95rem;
    transition: opacity 0.2s;
}

.nav-links a:hover { opacity: 0.7; }


</style>