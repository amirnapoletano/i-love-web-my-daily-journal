<script lang="ts">
    // if you imported journal images as URLs, you could even show a small inline visual:
    export let journalWebp: string;
    export let journalPng:  string;
</script>

<section class="features" role="region" aria-labelledby="features-heading">
    <h2 id="features-heading" class="sr-only">Why you’ll love My Daily Journal</h2>

    <div class="feat-image">
        <picture>
            <source srcset={journalWebp} type="image/webp" />
            <img src={journalPng}
                 alt="A person writing in a journal on a cozy blanket"
                 loading="lazy"
                 width="600" height="400" />
        </picture>
    </div>

    <ul class="feat-list">
        <li>
            <h3>Daily Reflections</h3>
            <p>Write down your thoughts, wins, and lessons every day.</p>
        </li>
        <!-- …other features… -->
    </ul>
</section>

<style>
    .features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        align-items: start;
        margin: 4rem 0;
    }
    .feat-image img {
        width: 100%; border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0,0,0,.1);
    }
    .feat-list {
        display: flex; flex-direction: column; gap: 1.5rem;
    }
    .feat-list h3 { font-size: var(--fs-lg); margin-bottom: .3rem; }
</style>
