<link rel="stylesheet" href="global.css">
<script lang="ts">
    import Hero     from '$lib/components/Hero.svelte';
    import Header     from '$lib/components/Header.svelte';
    import Entries  from '$lib/components/Entries.svelte';
    import heroWebp   from '$lib/assets/journaling_pirate_ship_scene.webp?url';
    import heroPng    from '$lib/assets/journaling_pirate_ship_scene.png?url';
    import journalWebp from '$lib/assets/journaling_scene.webp?url';
    import journalPng  from '$lib/assets/journaling_scene.png?url';
</script>

<Hero {heroWebp} {heroPng} />
<Entries />

