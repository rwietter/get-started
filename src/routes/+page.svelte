<script lang="ts">
  import type { Links } from "$lib/@types/Links";
  import LinksComponent from "../components/Links/Links.svelte";
  import SearchComponent from "../components/Search/Search.svelte";

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
        name: "Google AI",
        url: "https://aistudio.google.com/app/prompts/new_chat",
        icon: "ri:gemini-fill",
      },
      {
        name: "Perplexity",
        url: "https://www.perplexity.ai/",
        icon: "arcticons:perplexity",
      },
      {
        name: "Groq",
        url: "https://groq.com/",
        icon: "fluent-mdl2:machine-learning",
      },
      {
        name: "Claude",
        url: "https://claude.ai/new",
        icon: "fa6-solid:bahai",
      },
      {
        name: "NotebookLM",
        url: "https://notebooklm.google.com/",
        icon: "token:aioz",
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
</script>

<svelte:head>
  <title>~/getstarted</title>
  <meta
    name="description"
    content="Get started your internet journey with this page"
  />
</svelte:head>

<section class="wrapper">
  <section class="main">
    <h1 class="title">Get Started</h1>
    <SearchComponent />
    <LinksComponent {links} />
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
