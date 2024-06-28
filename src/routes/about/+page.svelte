<script lang="ts">
  import type { Links } from "$lib/@types/Links";
  import LinksComponent from "../../components/Links/Links.svelte";

  const links: Links = {
    english: [
      {
        name: "vocabulary",
        url: "https://www.vocabulary.com/dictionary/Becoming",
        icon: "mdi:book-open-variant",
      },
      {
        name: "News In Levels",
        url: "https://www.newsinlevels.com/",
        icon: "mdi:newspaper",
      },
      {
        name: "Ozdic",
        url: "https://ozdic.com/collocation/run",
        icon: "mdi:book-open-variant",
      },
      {
        name: "Write & Improve",
        url: "https://writeandimprove.com/",
        icon: "mdi:pencil",
      },
      {
        name: "English Grammar",
        url: "https://www.englishgrammar.org/exercises/",
        icon: "mdi:language",
      },
      {
        name: "Learn English Online",
        url: "https://learn-english-online.org/",
        icon: "mdi:book-open-variant",
      },
      {
        name: "Thesaurus",
        url: "https://www.thesaurus.com/",
        icon: "mdi:book-open-variant",
      },
      {
        name: "Sound Grammar",
        url: "https://soundgrammar.com/",
        icon: "mdi:book-open-variant",
      }
    ]
  }
</script>

<svelte:head>
  <title>More</title>
  <meta name="description" content="More links" />
</svelte:head>

<div>
  <LinksComponent links={links} />
</div>
