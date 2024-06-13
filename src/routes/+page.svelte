<script lang="ts">
  import { onMount } from "svelte";
  import { readable } from "svelte/store";

  const time = readable(new Date(), (set) => {
    const interval = setInterval(() => {
      set(new Date());
    }, 1000);

    return () => clearInterval(interval);
  });

  let formattedTime = new Intl.DateTimeFormat("en-GB", {
    timeStyle: "medium",
    dateStyle: "medium",
  }).format(new Date());

  onMount(() => {
    time.subscribe((value) => {
      formattedTime = new Intl.DateTimeFormat("en-GB", {
        timeStyle: "medium",
        dateStyle: "medium",
      }).format(value);
    });
  });

  type Category = "general" | "development" | "research"
  type Links = {
    [key in Category]: Array<{ name: string; url: string }>;
  }

  const links: Links = {
    general: [
      { name: "Gmail", url: "https://gmail.com" },
      { name: "Calendar", url: "https://calendar.notion.so/" },
      { name: "Wikiwand", url: "https://www.wikiwand.com/" },
    ],
    development: [
      { name: "GitHub", url: "https://github.com/rwietter" },
      { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Learn" },
      { name: "Stack Overflow", url: "https://stackoverflow.com/questions" },
      { name: "nLab", url: "https://ncatlab.org/nlab/show/HomePage" },
      { name: "Code Golf", url: "https://codegolf.stackexchange.com/" },
      { name: "Hacker News", url: "https://news.ycombinator.com/" },
    ],
    research: [
      { name: "arXiv", url: "https://arxiv.org/" },
      { name: "IEEE Xplore", url: "https://ieeexplore.ieee.org/" },
      { name: "ACM Digital Library", url: "https://dl.acm.org/"},
      { name: "Orcid", url: "https://orcid.org/my-orcid?orcid=0009-0003-5333-2885" },
    ]
  };

  function handleSearch(event: Event) {
    event.preventDefault();
    const searchInput = document.getElementById("browser-search") as HTMLInputElement;
    window.open(`https://duckduckgo.com/?q=${searchInput.value}`);
    searchInput.value = "";
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <section class="main">
    <h1>Welcome back!</h1>
    <p>{formattedTime}</p>
    <form class="search" on:submit={handleSearch}>
      <input
        type="search"
        id="browser-search"
        name="browser-search"
        placeholder="Search on DuckDuckGo"
      />
    </form>
    <section class="links">
      {#each Object.keys(links) as category}
        <section class="link-container">
          <h1>~/{category}</h1>
          <ul>
            {#each links[category] as link}
              <li>
                <a href={link.url} target="_blank" rel="noopener">{link.name}</a>
              </li>
            {/each}
          </ul>
        </section>
      {/each}
    </section>
  </section>
  <section class="image">
    <source
      srcset="girl.png"
      media="(min-width: 768px)"
    />
    <img src="girl.png" alt="Kitten" />
  </section>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr;
    padding-top: 3em;
    width: 100%;
  }

  @media (min-width: 768px) {
    section {
      grid-template-columns: 1fr 1fr;
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

  .search {
    width: 100%;
    padding-top: 3em;
  }
  .search input {
    outline: none;
    border-radius: 0.3em;
    padding: 0.7em 1em;
    width: 100%;
    background-color: var(--color-bg);
    border: 0;
    border-bottom: 1px solid var(--color-primary);
  }

  .links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    padding-top: 3em;
  }
  .link-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .link-container ul {
    padding: 1em 0 0 0;
    margin: 0;
    line-height: 1.5em;
    list-style: none;
  }

  .link-container h1 {
    font-family: var(--font-sans);
}

  .link-container a {
    color: var(--color-primary);
    font-family: var(--font-sans);
    text-decoration: none;
  }
  .link-container a:hover {
    text-decoration: underline;
  }
</style>
