<script>
  import Input from "../components/input.svelte";
  import Button from "../components/button.svelte";
  import { userlogin, username, fullname, login } from "../main";
  import { push } from "svelte-spa-router";

  let pass = "";
  let user = $userlogin;
  let shake = "";

  async function log() {
    let res = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        username: user,
        password: pass
      })
    });
    if (res.ok) {
      let json = await res.json();
      let fn = json.fullname;
      let usr = json.username;
      username.set(usr);
      fullname.set(fn);
      login.set("true");
      localStorage.setItem("login", "true");
      localStorage.setItem("username", usr);
      localStorage.setItem("fullname", fn);
      push("/profile");
    } else {
      shake = "shake";
      setTimeout(() => (shake = ""), 500);
    }
  }
</script>

<style>
  form {
    padding: 15px 40px 0;
  }

  .github {
    margin-right: 8px;
  }
  .sub {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .shake {
    animation: shake 0.5s;
  }

  @keyframes shake {
    0% {
      padding-left: 40px;
      padding-right: 40px;
    }
    25% {
      padding-left: 20px;
      padding-right: 60px;
    }
    50% {
      padding-left: 60px;
      padding-right: 20px;
    }
    75% {
      padding-left: 20px;
      padding-right: 60px;
    }
    100% {
      padding-left: 40px;
      padding-right: 40px;
    }
  }
</style>

<form class={shake}>
  <Input name={'Username'} bind:value={user} />
  <Input name={'Password'} type={'password'} bind:value={pass} />
  <Button name={'Log In'} on:click={log} disabled={pass.length == 0} />
</form>

<div class="sub">
  <a href="http://ya.ru">
    <i class="github" />
    <span>Sign with Git</span>
  </a>
</div>
