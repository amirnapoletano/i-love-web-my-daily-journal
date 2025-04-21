<script lang="ts">
    import './global.css';                    // 1) pull in your global styles
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import heroWebp from '$lib/assets/journaling_pirate_ship_scene.webp?url';
</script>

<svelte:head>
    <link rel="preload" as="image" href={heroWebp} />
</svelte:head>

<Header />

<main>
    <slot />
</main>

<Footer />
