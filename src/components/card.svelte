<script>
  import { push } from "svelte-spa-router";
  export let postID;
  export let title;
  export let username;
  export let replies;
  export let likes;
  export let dislikes;
</script>

<style>
  img {
    height: 49px;
    border-radius: 50%;
  }

  .quest {
    display: flex;
  }

  .base {
    width: calc(100% - 49px);
    padding-left: 16px;
    min-height: 70px;
  }

  .head {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }

  .actions {
    display: flex;
    justify-content: space-around;
    position: relative;
  }

  .actions > span {
    opacity: 0.5;
  }

  .actions > span:hover {
    opacity: 1;
    color: var(--secondary-color);
  }

  .head > span {
    font-size: 15px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 14px;
  }

  .card {
    border-bottom: 1px solid var(--border-color);
    padding: 16px;
  }

  .card:hover {
    background-color: var(--input-color);
  }

  .actions > span {
    width: 17.6px;
    white-space: nowrap;
    font-size: 14px;
  }

  .actions > span,
  .head > span {
    cursor: pointer;
  }
</style>

<div class="card">
  <div class="quest">
    <img src="profile.jpg" alt="usr" />
    <div class="base">
      <div class="head">
        <span on:click={push('/users/' + username)}>@{username}</span>
      </div>
      <a href="/#/questions/{postID}" class="text">
        <p>{title}</p>
      </a>
    </div>
  </div>
  <div class="actions">
    <span on:click={push('/questions/' + postID)}>
      <i class="message-circle" />
      {replies}
    </span>
    <span>
      <i class="thumbs-up" />
      {likes}
    </span>
    <span>
      <i class="thumbs-down" />
      {dislikes}
    </span>
    <span class="more">
      <i class="alert-circle" />
    </span>
  </div>
</div>
