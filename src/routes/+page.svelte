<script lang="ts">
    import Hero     from '$lib/components/Hero.svelte';
    import Features from '$lib/components/Features.svelte';
    import Entries  from '$lib/components/Entries.svelte';
    import heroWebp   from '$lib/assets/journaling_pirate_ship_scene.webp?url';
    import heroPng    from '$lib/assets/journaling_pirate_ship_scene.png?url';
    import journalWebp from '$lib/assets/journaling_scene.webp?url';
    import journalPng  from '$lib/assets/journaling_scene.png?url';
</script>

<Hero {heroWebp} {heroPng} />
<Features {journalWebp} {journalPng} />
<Entries />



<!-- ─────────────────────────  HERO  ──────────────────────────── -->
<section class="hero"
           style={`--hero-bg: url(${heroWebp}) center/cover, url(${heroPng}) center/cover`}
>
    <div class="container hero-content">
        <picture>
            <source srcset={heroWebp} type="image/webp" />
            <img   src={heroPng}  alt="Hero" loading="lazy" />
        </picture>
        <h1>My Daily Journal 2024/2025</h1>
        <p class="tagline">
            A cozy space to reflect, grow, and document your everyday journey
        </p>
        <a class="cta" href="#entries">Start Journaling</a>
    </div>
</section>

<!-- ───────────────────  “WHY YOU’LL LOVE…”  ─────────────────── -->
<section   class="features container"




           style={`background: url(${journalWebp}) center/cover, url(${journalPng}) center/cover `}>

    <ul class="feat-list">
        <li>
            <h3>Daily Reflections</h3>
            <p>Write down your thoughts, wins, and lessons every day.</p>
        </li>
        <li>
            <h3>Mood Tracking</h3>
            <p>Track your mood over time to see trends and patterns.</p>
        </li>
        <li>
            <h3>Attach Resources</h3>
            <p>Add links or images to remember key materials or ideas.</p>
        </li>
        <li>
            <h3>Privacy First</h3>
            <p>Your journal is for your eyes only—unless you choose to share.</p>
        </li>
    </ul>
</section>

<!-- ─────────────────────  JOURNAL ENTRIES  ───────────────────── -->
<section id="entries" class="entries">
    <div class="container">
        <!-- keeps your original HTML intact inside the new card grid -->
        <article class="journal-content">
            <!-- ✂️  paste your long list of <h2>/<p>/<ul> here, unchanged  -->
            {@html `<h2>Maandag 2 september 2024</h2>

    <h2>Maandag 2 september 2024</h2>
    <p>De week begon met het leren van de basisprincipes van Svelte en SvelteKit. We hebben de projectstructuur voor de squad-pagina in SvelteKit opgezet en samengewerkt aan het eerste ontwerp in Figma.</p>
    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://kit.svelte.dev/docs/introduction">SvelteKit introductie</a></li>
        <li><a href="https://kit.svelte.dev/docs/creating-a-project">SvelteKit project opzetten</a></li>
    </ul>

    <h2>Dinsdag 3 september 2024</h2>
    <p>Verder gewerkt aan de squadpage met het team.</p>
    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://kit.svelte.dev/docs/routing">SvelteKit Routing</a></li>
    </ul>

    <h2>Woensdag 4 september 2024</h2>
    <p>Workshop over live-rendering met Justus, waarin we leerden hoe we informatie uit Directus kunnen weergeven met SvelteKit.</p>
    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://docs.directus.io/blog/getting-started-directus-sveltekit.html">Directus & SvelteKit integratie</a></li>
    </ul>

    <h2>Donderdag 5 september 2024</h2>
    <p>Verder gewerkt aan de squadpage met het team.</p>
    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://kit.svelte.dev/docs/load">Gegevens ophalen in SvelteKit</a></li>
    </ul>

    <h2>Vrijdag 6 september 2024</h2>
    <p>We hebben de eerstejaars visitekaartjes bekeken en daarna feedback gegeven en ontvangen over de code en het ontwerp van de squadpage.</p>
    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://svelte.dev/docs#style">SvelteKit CSS styling</a></li>
    </ul>

    <h2>Maandag 9 september 2024</h2>
    <p>Workshop "Kill Your Darlings" met Cyd over het experimenteren en variëren met ontwerpen in Figma.</p>
    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://help.figma.com/hc/en-us/articles/360040451373-Auto-layout">Figma Auto Layout</a></li>
    </ul>

    <h2>Dinsdag 10 september 2024</h2>
    <p>Verder gewerkt aan mijn visitekaartje en squadpage.</p>
    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://svelte.dev/docs#style">CSS aanpassen in Svelte</a></li>
    </ul>

    <h2>Woensdag 11 september 2024</h2>
    <p>Creative Coding workshop met Justus. Ik herinnerde me veel van de concepten, aangezien ik al ervaring had met Svelte.</p>
    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://svelte.dev/docs#motion">Svelte transities</a></li>
        <li><a href="https://kit.svelte.dev/docs/glossary#ssr">Svelte server-side rendering</a></li>
    </ul>

    <h2>Donderdag 12 september 2024</h2>
    <p>Verder gewerkt aan mijn visitekaartje en squadpage, en vragen gesteld aan Justus.</p>
    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://vercel.com/docs">Project deployen met Vercel</a></li>
        <li><a href="https://svelte.dev/docs#motion">SvelteKit animaties</a></li>
    </ul>

    <h2>Vrijdag 13 september 2024</h2>
    <p>We ♥ Web presentatie door Vasilis van Gemert over toegankelijkheid, creativiteit en klokken. Daarna feedback gekregen op de squadpage.</p>
    <p><strong>Toegankelijkheid en Screen Readers:</strong> Screen readers zijn essentieel voor mensen met een visuele beperking. Het gebruik van semantische HTML en ARIA-labels is cruciaal om websites toegankelijk te maken voor iedereen.</p>
    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA">ARIA-labels in HTML</a></li>
    </ul>

    <h2>Maandag 16 september 2024</h2>
    <p>Workshop prioriteren met Justus over het gebruik van epics, user stories, en taken in projectbeheer. We leerden hoe werk efficiënt wordt georganiseerd in kleinere, behapbare stukken.</p>
    <p><strong>Wat heb ik geleerd?</strong></p>
    <ul>
        <li>Epics splitsen het werk op in kleinere, opleverbare taken.</li>
        <li>User stories helpen de gebruiker centraal te stellen bij elk projectonderdeel.</li>
    </ul>
    <p><strong>Notities:</strong> "Epics helpen bij het overzicht houden over grote projecten." "User stories houden de focus op wat de gebruiker wil bereiken."</p>

    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://www.atlassian.com/agile/project-management/epics">Atlassian Guide to Epics</a></li>
        <li><a href="https://www.scrum.org/resources/what-is-a-user-story">Scrum User Stories Explained</a></li>
    </ul>

    <h2>Woensdag 18 september 2024</h2>
    <p>Wrap-up sessie over codeconventies, planning en taakverdeling. Voorbereiding voor de expo en het organiseren van een retrospect.</p>
    <p><strong>Wat heb ik geleerd?</strong></p>
    <ul>
        <li>Codeconventies zorgen voor consistente, onderhoudbare code.</li>
        <li>Plannen en taakverdeling verbeteren de efficiëntie van het team.</li>
    </ul>
    <p><strong>Notities:</strong> "Code moet semantisch zijn: HTML correct inspringen en CSS logisch groeperen." "JavaScript volgorde: eerst variabelen, dan logica, en tenslotte functies."</p>

    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://google.github.io/styleguide/htmlcssguide.html">Google HTML/CSS Style Guide</a></li>
        <li><a href="https://www.scrum.org/resources/scrum-guide">Scrum Guide</a></li>
    </ul>
    <h2>Maandag 23 september 2024</h2>
    <p>Sprintplanning met uitleg over sprint 14 en teamindeling. Vandaag bespraken we de planning voor sprint 14 en stelden we doelen voor de komende weken.</p>
    <p><strong>Wat heb ik geleerd?</strong></p>
    <ul>
        <li>Het belang van duidelijke communicatie binnen het team.</li>
        <li>Hoe je een sprintplan opstelt en verantwoordelijkheid verdeelt.</li>
    </ul>
    <p><strong>Notities:</strong> "Sprintplanning zorgt voor focus en structuur in het project."</p>

    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://www.scrum.org/resources/what-is-sprint-planning">Scrum Sprint Planning</a></li>
    </ul>

    <h2>Dinsdag 24 september 2024</h2>
    <p>CSS Challenge 3 - Gradients. We verdiepten ons in geavanceerde CSS-technieken, vooral gericht op gradients, en hoe ze worden toegepast in moderne webdesigns.</p>
    <p><strong>Wat heb ik geleerd?</strong></p>
    <ul>
        <li>Hoe je complexe gradients ontwerpt en implementeert.</li>
        <li>Toepassing van CSS-best practices.</li>
    </ul>
    <p><strong>Notities:</strong> "Gradients verbeteren de visuele aantrekkingskracht van een website."</p>

    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/gradient">MDN CSS Gradients</a></li>
    </ul>
    <h2>Woensdag 25 september 2024</h2>
    <p>Workshop Informatiearchitectuur. Vandaag bespraken we het structureren van informatie op de frontend en het gebruik van headless CMS-systemen om content dynamisch te beheren.</p>
    <p><strong>Wat heb ik geleerd?</strong></p>
    <ul>
        <li>Hoe je informatie architectuur opzet voor een website.</li>
        <li>Het gebruik van headless CMS voor dynamisch contentbeheer.</li>
    </ul>
    <p><strong>Notities:</strong> "Informatiearchitectuur is cruciaal voor een goed functionerende website."</p>

    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Headless_CMS">MDN Headless CMS uitleg</a></li>
    </ul>

    <h2>Donderdag 26 september 2024</h2>
    <p>Vragen stellen sessie met s. Vandaag hadden we de kans om vragen te stellen over onze projecten en verder te werken aan de architectuur van onze website.</p>
    <p><strong>Wat heb ik geleerd?</strong></p>
    <ul>
        <li>Hoe je structuur kunt aanbrengen in de backend met API-gebaseerde oplossingen.</li>
        <li>Het belang van gebruikersgerichte vragen bij het ontwikkelen van webapplicaties.</li>
    </ul>
    <p><strong>Notities:</strong> "Goede communicatie met teamleden versnelt probleemoplossing."</p>

    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/API">MDN API Documentatie</a></li>
    </ul>

    <h2>Vrijdag 27 september 2024</h2>
    <p>Design review over de eerste versie van het project. We bespraken de huidige status van onze website en kregen feedback van Suus over de ontwerpkeuzes en technische implementaties.</p>
    <p><strong>Wat heb ik geleerd?</strong></p>
    <ul>
        <li>Het belang van consistente ontwerpprincipes in een project.</li>
        <li>Hoe technische beperkingen de creatieve vrijheid in ontwerpen kunnen beïnvloeden.</li>
    </ul>
    <p><strong>Notities:</strong> "Feedbackmomenten helpen de kwaliteit van het project aanzienlijk te verbeteren."</p>

    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS">CSS Debugging & Performance</a></li>
    </ul>
    <h2>Maandag 30 september 2024</h2>
    <p>Vandaag hadden we een talk over de abstracte principes van een framework met Justus. Het was interessant om meer inzicht te krijgen in hoe SvelteKit werkt op een hoger niveau.</p>
    <p><strong>Wat heb ik geleerd?</strong></p>
    <ul>
        <li>Inzicht in de abstracte lagen van frameworks zoals SvelteKit.</li>
        <li>Het belang van component-gebaseerde architectuur in moderne webdevelopment.</li>
    </ul>
    <p><strong>Notities:</strong> "Het begrijpen van de kernprincipes van een framework helpt je betere keuzes te maken tijdens de ontwikkeling."</p>

    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://kit.svelte.dev/docs">SvelteKit Documentatie</a></li>
    </ul>

    <h2>Dinsdag 1 oktober 2024</h2>
    <p>Vandaag hebben we gewerkt aan de CSS Challenge 4, waarin we de flexbox module en layout technieken hebben geleerd.</p>
    <p><strong>Wat heb ik geleerd?</strong></p>
    <ul>
        <li>Hoe je flexbox toepast om responsive layouts te maken.</li>
        <li>Best practices voor het structureren van een flexbox layout voor maximale flexibiliteit.</li>
    </ul>
    <p><strong>Notities:</strong> "Flexbox geeft je veel controle over hoe je elementen ordent binnen een container."</p>

    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox Basics</a></li>
    </ul>

    <h2>Woensdag 2 oktober 2024</h2>
    <p>Workshop Design Critique met Dorien, waarin we onze ontwerpen kritisch onder de loep namen en feedback gaven aan elkaar.</p>
    <p><strong>Wat heb ik geleerd?</strong></p>
    <ul>
        <li>Hoe je opbouwende kritiek kunt geven en ontvangen.</li>
        <li>Het belang van itereren op een ontwerp op basis van feedback.</li>
    </ul>
    <p><strong>Notities:</strong> "Feedback is cruciaal voor het verfijnen van een ontwerp."</p>

    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://uxdesign.cc/design-critique-best-practices-70ef2c41d60a">Best practices voor Design Critique</a></li>
    </ul>

    <h2>Donderdag 3 oktober 2024</h2>
    <p>Vandaag hebben we vragen gesteld en gewerkt aan onze squadpage. Het was een rustige dag vol gefocust werk en probleemoplossing.</p>
    <p><strong>Wat heb ik geleerd?</strong></p>
    <ul>
        <li>Hoe je efficiënt vragen stelt om snel antwoorden te krijgen.</li>
        <li>Problemen in de code snel herkennen en oplossen met hulp van anderen.</li>
    </ul>
    <p><strong>Notities:</strong> "Stel gerichte vragen om snel en effectief antwoorden te krijgen."</p>

    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a></li>
    </ul>

    <h2>Vrijdag 4 oktober 2024</h2>
    <p>We ♥ Web presentatie door Nicolas Garnier, waar we het hadden over creativiteit in webontwikkeling. Daarna hadden we een code/design review met Suus.</p>
    <p><strong>Wat heb ik geleerd?</strong></p>
    <ul>
        <li>Creativiteit is essentieel voor het ontwikkelen van boeiende en dynamische websites.</li>
        <li>Het belang van consistente code en design tijdens de reviewprocessen.</li>
    </ul>
    <p><strong>Notities:</strong> "Creativiteit en innovatie moeten altijd hand in hand gaan met best practices."</p>

    <p><strong>Documentatie:</strong></p>
    <ul>
        <li><a href="https://web.dev/learn/design">Web Development Design Principles</a></li>
    </ul>
`}
            <!-- …the rest of your existing markup… -->
        </article>
    </div>
</section>


<style>/* ─── RESET & TOKENS ─────────────────────────────────────────── */
:root {
    --clr-black: #000000;
    --clr-white: #ffffff;
    --clr-accent: #e7722d;        /* orange button */
    --font-body: 'Roboto', system-ui, sans-serif;
    --content-max: 1280px;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

body {
    font-family: var(--font-body);
    color: #111;
    background: #fafafa;
    line-height: 1.6;
}

.container {
    max-width: var(--content-max);
    margin-inline: auto;
    padding-inline: 1rem;
}

/* ─── HERO ───────────────────────────────────────────────────── */
.hero {
    --overlay: rgba(0, 0, 0, 0.55);
    background: var(--overlay) center / cover,
    var(--hero-bg) center / cover;
    color: var(--clr-white);
    min-block-size: 65vh;
    display: flex;
    align-items: center;
}
.hero-content {
    max-inline-size: 40rem;
}

.hero h1 {
    font-size: clamp(2rem, 6vw, 3.4rem);
    margin-block-end: 0.5rem;
    line-height: 1.15;
}

.tagline { margin-block-end: 1.8rem; }

.cta {
    display: inline-block;
    background: var(--clr-accent);
    color: var(--clr-white);
    padding: 0.75rem 1.4rem;
    border-radius: 4px;
    font-weight: 700;
    text-decoration: none;
    transition: background 0.25s;
}

.cta:hover { background: #cf6425; }

/* ─── FEATURES ───────────────────────────────────────────────── */
.features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-block: 6rem;
    align-items: center;
}

.features img {
    inline-size: 100%;
    block-size: auto;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 6px 20px rgb(0 0 0 / 0.15);
}

.feat-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style: none;
}

.feat-list h3 { font-size: 1.3rem; margin-block-end: 0.3rem; }

/* ─── ENTRIES SECTION ───────────────────────────────────────── */
.entries {
    background: var(--clr-black);
    color: var(--clr-white);
    padding-block: 4rem;
}

.journal-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    gap: 2.5rem;
}

.journal-content h2 {
    font-size: 1.3rem;
    margin-block-end: 0.3rem;
    color: var(--clr-white);
}

.journal-content p,
.journal-content ul { font-size: 0.95rem; }

.journal-content ul { padding-left: 1.2rem; }

/* ─── RESPONSIVE TWEAKS ─────────────────────────────────────── */
@media (max-width: 900px) {
    .features { grid-template-columns: 1fr; }
    .features .feat-image { order: -1; }  /* image above text */
    .footer-inner { grid-template-columns: 1fr; }
}
</style>