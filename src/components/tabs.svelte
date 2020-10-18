<script>
  import { location, push } from "svelte-spa-router";
</script>

<style>
  .tabs {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    border-bottom: 1px solid var(--border-color);
  }
  .tab {
    text-align: center;
    padding: 8px;
    cursor: pointer;
    opacity: 0.6;
    font-size: 13px;
  }

  .active {
    border-bottom: 2px solid var(--secondary-color);
    color: var(--secondary-color);
    opacity: 1;
  }
</style>

<div class="tabs">
  <div
    class="tab {$location == '/profile' ? 'active' : ''}"
    on:click={() => push('/profile')}>
    Questions
  </div>
  <div
    class="tab {$location == '/profile/instructions' ? 'active' : ''}"
    on:click={() => push('/profile/instructions')}>
    Instructions
  </div>
  <div
    class="tab {$location == '/profile/replies' ? 'active' : ''}"
    on:click={() => push('/profile/replies')}>
    Replies
  </div>
  <div
    class="tab {$location == '/profile/likes' ? 'active' : ''}"
    on:click={() => push('/profile/likes')}>
    Likes
  </div>
</div>
