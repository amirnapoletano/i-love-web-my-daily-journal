<script lang="ts">
    export let heroWebp: string;
    export let heroPng:  string;
</script>

<section
        class="hero"
        role="banner"
        aria-label="Hero: My Daily Journal"
        style="--hero-bg: url({heroWebp}) center/cover, url({heroPng}) center/cover;"
>
    <div class="container hero-content">
        <picture>
            <source srcset={heroWebp} type="image/webp" />
            <img src={heroPng}
                 alt="Open journal on a ship deck at sunset"
                 loading="lazy"
                 width="1200" height="600" />
        </picture>

        <h1>My Daily Journal 2024 / 2025</h1>
        <p class="tagline">
            A cozy space to reflect, grow, and document your everyday journey
        </p>
        <a class="cta" href="#entries">Start Journaling</a>
    </div>
</section>

<style>
    .hero {
        position: relative;
        min-height: 65vh;
        background:
                rgba(0,0,0, .4) center/cover,
                var(--hero-bg);
        display: flex;
        align-items: center;
        color: #fff;
        margin:10rem auto;
        }
    .hero-content {
        max-width: 100%;
    }
    .tagline { margin-bottom: 4rem; font-size: var(--fs-lg);
        margin-top: 2rem;
    }

img{
    border-radius: 50px;
    max-width: 100%;
    max-height: 100%;

}


    .cta {
        margin: 5rem auto;
        background: var(--clr-accent);
        color: white;
        padding: .75rem 1.4rem;
        border-radius: 9px;
        font-weight: 700;
    }

    .cta:hover,
    .cta:focus {
        background: var(--clr-accent-hover);
        outline: 2px solid #fff;
    }
</style>