<script>
    import logoPng    from '$lib/assets/Sailor.png?url';
    import logoWebp   from '$lib/assets/Sailor.webp?url';
</script>

<footer class="site-footer">
    <div class="container footer-inner">
        <div class="footer-brand">
            <picture>
                <source srcset="{logoWebp}" type="image/webp" />
                <img src="{logoPng}" alt="logo" />
            </picture>
            <h2>My Daily Journal - <span>The Sailor</span></h2>
            <p>A cozy place to reflect, write, and share your journey day by day.</p>
        </div>

        <nav class="footer-nav">
            <h3>Navigation</h3>
            <ul>
                <li><a href="/">Home</a></li>
            </ul>
        </nav>
    </div>
</footer>


<style>
    /* ─── FOOTER ─────────────────────────────────────────────────── */
    .site-footer {
    padding-block: 6rem;
    background: var(--clr-accent-active);
        padding-top: 2rem;
}
h2{
    color: var(--clr-bg-end);
}
li{
    color: var(--clr-accent);}

    .footer-inner {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 6rem;
}

    .footer-brand img {
    inline-size: 4rem;
    block-size: 4rem;
    margin-block-end: 0.6rem;
}

    .footer-brand h2 { margin-block-end: 1em;

    }
    .footer-nav ul {
    list-style: none;
    padding: 0;
}
    .footer-nav{
        padding-top:5rem;
        padding-left: 4rem;
    }

        .footer-nav a {
            color: var(--clr-accent);
            text-decoration: none;
            transition: color 0.2s;
            padding-left:4rem}

        .footer-nav a:hover { color: var(--clr-accent); }
    }

</style>





