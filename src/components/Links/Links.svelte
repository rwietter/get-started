<script lang="ts">
  import Icon from "@iconify/svelte";

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  export let links: any;

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
