<script>
  import Editable from "../components/editable.svelte";
  import Tweet from "../components/writetweet.svelte";
  import { pop } from "svelte-spa-router";
  import { login } from "../main";

  $: chosenCats = [];
  $: question = "";
  $: description = "";

  async function submit() {
    let res = await fetch("http://localhost:8080/api/ask", {
      credentials: "include",
      method: "POST",
      body: JSON.stringify({
        tweet: question,
        description: description
      })
    });

    if (res.ok) {
      pop();
    } else {
      login.set("false");
      localStorage.removeItem("login");
      pop();
    }
  }
</script>

<style>
  button {
    float: right;
    margin: 20px;
    border: none;
    border-radius: 50px;
    background: var(--secondary-color);
    color: var(--text-color);
    padding: 8px 16px;
  }
</style>

<div class="pop">
  <Tweet bind:question bind:chosenCats />
  <Editable bind:description />
  <button on:click={submit}>Ask community</button>
</div>
