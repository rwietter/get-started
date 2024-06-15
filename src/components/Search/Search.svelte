<script lang="ts">
  function handleSearch(event: Event) {
    event.preventDefault();
    const searchInput = document.getElementById(
      "browser-search",
    ) as HTMLInputElement;
    window.open(`https://duckduckgo.com/?q=${searchInput.value}`);
    searchInput.value = "";
  }
</script>

<form class="search" on:submit={handleSearch}>
  <input
    type="search"
    id="browser-search"
    name="browser-search"
    autocomplete="off"
    placeholder="Search on DuckDuckGo"
  />
</form>

<style>
  .search {
    width: 100%;
    padding-top: 1em;
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
