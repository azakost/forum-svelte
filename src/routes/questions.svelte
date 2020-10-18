<script>
  import Card from "../components/card.svelte";
  const title = {
    en: "Questions",
    ru: "Вопросы"
  };

  let data = [];

  posts();
  async function posts() {
    let res = await fetch("http://localhost:8080/api/postslist");

    data = await res.json();
  }
</script>

<style>
  .scrollable {
    height: calc(100vh - 56px);
    overflow: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .scrollable::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 500px) {
    .scrollable {
      height: calc(100vh - 56px - 48px);
    }
  }
</style>

<div class="scrollable">
  {#each data as d}
    <Card {...d} />
  {/each}

</div>
