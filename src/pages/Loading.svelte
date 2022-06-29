<script>
  export let params = null
</script>

<h2>Loading ...</h2>
{#if params && params.message}
  <p id="loading-message">Message is {params.message}</p>
{/if}
