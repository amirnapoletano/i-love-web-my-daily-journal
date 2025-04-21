+<script lang="ts">
    /** Ideally, switch to .md + mdsvex instead of a giant HTML string! **/
    export let htmlContent: string;
</script>

<section id="entries" class="entries" role="region" aria-labelledby="entries-heading">
    <h2 id="entries-heading">Journal Entries</h2>
    <div class="journal-grid">
        {@html htmlContent}
    </div>
</section>

<style>
    .entries { padding: 3rem 0; background: #fff; }
    .entries h2 {
        font-size: var(--fs-2xl);
        text-align: center;
        margin-bottom: 2rem;
    }
    .journal-grid {
        display: grid;
        gap: 2.5rem;
        grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    }
    .journal-grid h2 {
        font-size: var(--fs-lg);
        color: var(--clr-text);
    }
    .journal-grid p, .journal-grid ul {
        color: var(--clr-muted);
    }
    .journal-grid a {
        color: var(--clr-accent);
    }
</style>
