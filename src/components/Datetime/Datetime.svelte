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
</script>

<p class="datetime">{formattedTime}</p>

<style>
   .datetime {
    font-family: var(--font-mono);
    padding-top: 0.8em;
  }
</style>