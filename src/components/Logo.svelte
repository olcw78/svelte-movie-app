<script>
  import { link } from 'svelte-spa-router'
</script>

<a use:link href="/">
  <span>OMDb API</span>.COM
</a>

<style lang="scss">
  a {
    display: block;
    font-family: 'oswald', sans-serif;
    font-size: 20px;
    color: rgba(#fff, 0.5);
    text-decoration: none;

    span {
      color: #fdc000;
    }
  }
</style>
