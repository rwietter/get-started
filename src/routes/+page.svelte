<script lang="ts">
  import Datetime from "../components/Datetime/Datetime.svelte";
  import Links from "../components/Links/Links.svelte";

  function handleSearch(event: Event) {
    event.preventDefault();
    const searchInput = document.getElementById(
      "browser-search",
    ) as HTMLInputElement;
    window.open(`https://duckduckgo.com/?q=${searchInput.value}`);
    searchInput.value = "";
  }
</script>

<svelte:head>
  <title>~/getstarted</title>
  <meta name="description" content="Get started your internet journey with this page" />
</svelte:head>

<section class="wrapper">
  <section class="main">
    <h1 class="title">Get Started</h1>
    <Datetime />
    <form class="search" on:submit={handleSearch}>
      <input
        type="search"
        id="browser-search"
        name="browser-search"
        autocomplete="off"
        placeholder="Search on DuckDuckGo"
      />
    </form>
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
      padding-top: 3em;
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
  }

  .search {
    width: 100%;
    padding-top: 3em;
  }
  .search input {
    outline: none;
    padding: 0.7em 1em;
    width: 100%;
    color: var(--color-text);
    background-color: var(--color-bg);
    border: 0;
    font-family: var(--font-mono);
    border-bottom: 1px solid var(--color-primary);
  }

</style>
