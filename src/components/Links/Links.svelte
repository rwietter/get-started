<script lang="ts">
  import Icon from "@iconify/svelte";

  type Category = "general" | "development" | "research" | "ai" | "math";
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
      {
        name: "Hacker News",
        url: "https://news.ycombinator.com/",
        icon: "icomoon-free:hackernews",
      },
      {
        name: "TI Lecture Notes",
        url: "https://www.brainkart.com/menu/information-technology-engineering/",
        icon: "mdi:book-open-variant",
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
        name: "Refactoring Guru",
        url: "https://refactoring.guru/pt-br",
        icon: "arcticons:battery-guru",
      },
      {
        name: "Source Making",
        url: "https://sourcemaking.com/",
        icon: "game-icons:gear-stick-pattern",
      },
      {
        name: "Patterns.dev",
        url: "https://www.patterns.dev/",
        icon: "eos-icons:patterns-outlined",
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
        name: "CS Theory",
        url: "https://cstheory.stackexchange.com/",
        icon: "cib:stackexchange",
      },
      {
        name: "Orcid",
        url: "https://orcid.org/my-orcid?orcid=0009-0003-5333-2885",
        icon: "simple-icons:orcid",
      },
    ],
    ai: [
      {
        name: "GPT",
        url: "https://chatgpt.com/",
        icon: "arcticons:openai-chatgpt",
      },
      {
        name: "Anthropic",
        url: "https://console.anthropic.com/workbench/71fc965a-5548-4149-8328-bba0b64499d2",
        icon: "simple-icons:anthropic",
      },
      {
        name: "Perplexity",
        url: "https://www.perplexity.ai/",
        icon: "arcticons:perplexity",
      },
    ],
    math: [
      {
        name: "Wolfram Alpha",
        url: "https://www.wolframalpha.com/",
        icon: "simple-icons:wolfram",
      },
      {
        name: "nLab",
        url: "https://ncatlab.org/nlab/show/HomePage",
        icon: "arcticons:ahnlab-v3-plus",
      },
      {
        name: "Math is Fun",
        url: "https://www.mathsisfun.com/",
        icon: "simple-icons:awslambda",
      },
      {
        name: "Better Explained",
        url: "https://betterexplained.com/archives/",
        icon: "ooui:mathematics",
      },
      {
        name: "Set Theory",
        url: "https://settheory.net/",
        icon: "mdi:set-center",
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
    gap: 2em;
    padding-top: 2em;
  }
  @media (min-width: 768px) {
    .links {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
  .link-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
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

  .link-container li {
    display: flex;
    align-items: center;
  }
  .link-container li a {
    padding-left: 0.5em;
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
