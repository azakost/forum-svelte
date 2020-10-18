<script>
  import Input from "../components/input.svelte";
  import Button from "../components/button.svelte";
  import { push } from "svelte-spa-router";
  import { userlogin } from "../main";

  $: username = "";
  $: fullname = "";
  $: email = "";
  $: pass1 = "";
  $: pass2 = "";

  let usrErr, fnErr, emailErr, passErr, pass2Err;

  async function register() {
    let res = await fetch("http://localhost:8080/api/register", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        fullname: fullname,
        password: pass1
      })
    });
    if (res.ok) {
      userlogin.set(username);
      push("/login");
    } else {
      let errs = await res.json();
      fnErr = errs.fullname;
      usrErr = errs.username;
      emailErr = errs.email;
      passErr = errs.password;
      console.log(errs);
    }
  }
</script>

<style>
  form {
    padding: 15px 40px 0;
  }
</style>

<div class="pop">

  <form>
    <Input name={'Username'} bind:value={username} error={usrErr} />
    <Input name={'Full Name'} bind:value={fullname} error={fnErr} />
    <Input name={'Email'} bind:value={email} type={'email'} error={emailErr} />
    <Input
      name={'Password'}
      bind:value={pass1}
      type={'password'}
      error={passErr} />
    <Input
      name={'Re-enter password'}
      bind:value={pass2}
      type={'password'}
      error={pass1 != pass2 ? (pass2Err = 'Password is not matched!') : null} />
    <Button
      name={'Register'}
      on:click={register}
      disabled={pass1 != pass2 || pass1 == ''} />
  </form>

</div>
