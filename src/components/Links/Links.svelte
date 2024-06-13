<script lang="ts">
  import Icon from "@iconify/svelte";

  type Category = "general" | "development" | "research";
  type Links = {
    [key in Category]: Array<{ name: string; url: string; icon: string }>;
  };

  const links: Links = {
    general: [
      { name: "Gmail", url: "https://gmail.com", icon: "basil:gmail-solid" },
      {
        name: "Calendar",
        url: "https://calendar.notion.so/",
        icon: "mage:calendar-3-fill",
      },
      {
        name: "Wikiwand",
        url: "https://www.wikiwand.com/",
        icon: "flat-color-icons:wikipedia",
      },
    ],
    development: [
      {
        name: "GitHub",
        url: "https://github.com/rwietter",
        icon: "mdi:github",
      },
      {
        name: "MDN Web Docs",
        url: "https://developer.mozilla.org/en-US/docs/Learn",
        icon: "simple-icons:mdnwebdocs",
      },
      {
        name: "Stack Overflow",
        url: "https://stackoverflow.com/questions",
        icon: "cib:stackoverflow",
      },
      {
        name: "nLab",
        url: "https://ncatlab.org/nlab/show/HomePage",
        icon: "arcticons:ahnlab-v3-plus",
      },
      {
        name: "Code Golf",
        url: "https://codegolf.stackexchange.com/",
        icon: "pepicons-pencil:code-circle-filled",
      },
      {
        name: "Hacker News",
        url: "https://news.ycombinator.com/",
        icon: "icomoon-free:hackernews",
      },
    ],
    research: [
      { name: "arXiv", url: "https://arxiv.org/", icon: "simple-icons:arxiv" },
      {
        name: "IEEE Xplore",
        url: "https://ieeexplore.ieee.org/",
        icon: "simple-icons:ieee",
      },
      {
        name: "ACM Digital Library",
        url: "https://dl.acm.org/",
        icon: "simple-icons:acm",
      },
      {
        name: "Orcid",
        url: "https://orcid.org/my-orcid?orcid=0009-0003-5333-2885",
        icon: "simple-icons:orcid",
      },
    ],
  };

  function typedKeys<T extends object>(obj: T): Array<keyof T> {
    return Object.keys(obj) as Array<keyof T>;
  }
</script>

<section class="links">
  {#each typedKeys(links) as category}
    <section class="link-container">
      <h1>~/{category}</h1>
      <ul>
        {#each links[category] as link}
          <li>
            <Icon icon={link.icon} />
            <a href={link.url} target="_blank" rel="noopener">{link.name}</a>
          </li>
        {/each}
      </ul>
    </section>
  {/each}
</section>

<style>
  .links {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    padding-top: 3em;
  }
  @media (min-width: 768px) {
    .links {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .link-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .link-container + .link-container {
    padding-top: 3em;
    transition: padding-top 0.2s ease;
  }
  @media (min-width: 768px) {
    .link-container + .link-container {
      padding-top: 0;
    }
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
    font-family: var(--font-mono);
    text-decoration: none;
  }
  .link-container a:hover {
    text-decoration: underline;
  }
</style>
