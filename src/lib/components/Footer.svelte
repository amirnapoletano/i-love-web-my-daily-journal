<script>
    import logoPng    from '$lib/assets/Sailor.png?url';
    import logoWebp   from '$lib/assets/Sailor.webp?url';
</script>

<footer class="site-footer">
    <div class="container footer-inner">
        <div class="footer-brand">
            <picture>
                <source srcset="{logoWebp}" type="image/webp" />
                <img src="{logoPng}" alt="" />
            </picture>
            <h2>My Daily Journal</h2>
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
    padding-block: 3.5rem;
    background: var(--clr-muted);
}

    .footer-inner {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
}

    .footer-brand img {
    inline-size: 48px;
    block-size: 48px;
    margin-block-end: 0.6rem;
}

    .footer-brand h2 { margin-block-end: 0.8rem; }

    .footer-nav ul {
    list-style: none;
    padding: 0;
}

    .footer-nav a {
    color: #555;
    text-decoration: none;
    transition: color 0.2s;
}

    .footer-nav a:hover { color: var(--clr-accent); }

</style>





