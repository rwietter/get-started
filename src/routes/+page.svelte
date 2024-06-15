<script lang="ts">
  import Links from "../components/Links/Links.svelte";
  import Search from "../components/Search/Search.svelte";
</script>

<svelte:head>
  <title>~/getstarted</title>
  <meta name="description" content="Get started your internet journey with this page" />
</svelte:head>

<section class="wrapper">
  <section class="main">
    <h1 class="title">Get Started</h1>
    <Search />
    <Links />
  </section>
  <section class="image">
    <source srcset="girl.png" media="(min-width: 768px)" />
    <img src="girl.png" alt="Kitten" />
  </section>
</section>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    padding-top: 1em;
    width: 100%;
    gap: 4em;
  }

  @media (min-width: 1230px) {
    .wrapper {
      grid-template-columns: 1fr 20em;
      padding-top: 2em;
    }
  }

  .image {
    max-width: 100%;
  }

  .image img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .main .title {
    font-family: var(--font-mono);
    font-size: clamp(1.2em, 3vw, 2.3em);
  }

</style>
