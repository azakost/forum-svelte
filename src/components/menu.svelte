<script>
  import Item from "./menuItem.svelte";
  import { language, login, username, fullname } from "../main";

  const dictionary = {
    en: {
      Questions: "Questions",
      Instructions: "Instructions",
      Ranking: "Ranking",
      Hello: "Hello, student!",
      Plz: "Please log in..."
    },
    ru: {
      Questions: "Вопросы",
      Instructions: "Инструкции",
      Ranking: "Рейтинг",
      Hello: "Привет, студент!",
      Plz: "Залогинься, plz..."
    }
  };

  $: p = dictionary[$language];
</script>

<style>
  .menu {
    position: relative;
    border-right: 1px solid var(--border-color);
    background: var(--menu-color);
  }

  @media only screen and (max-width: 500px) {
    .menu {
      position: absolute !important;
      bottom: 0;
      display: flex;
      border-right: none !important;
      border-top: 1px solid var(--border-color);
      width: 100%;
      justify-content: space-around;
      z-index: 9;
      height: 49px;
    }
  }

  .logo {
    height: 24px;
  }

  .profile {
    border-radius: 50%;
    border: 2px solid var(--text-color);
    height: 28px;
  }

  h4 {
    font-size: 14px;
    margin-bottom: 4px;
  }

  p {
    font-size: 12px;
    font-weight: bold;
  }
</style>

<div class="menu">
  <Item href={'/'} mHidden={true}>
    <img slot="left" class="logo" src="logo.png" alt="logo" />
  </Item>

  <Item href={'/'} icon={'help-circle'} title={p.Questions} />

  <Item href={'/instructions'} icon={'book-open'} title={p.Instructions} />
  <Item href={'/ranking'} icon={'award'} title={p.Ranking} />

  {#if $login == 'true'}
    <Item href={'/profile'}>
      <img slot="left" class="profile" src="profile.jpg" alt="profile" />
      <h4 slot="head">{$fullname}</h4>
      <p slot="sub">@{$username}</p>
    </Item>
  {:else}
    <Item href={'/login'} icon={'user'}>
      <h4 slot="head">{p.Hello}</h4>
      <p slot="sub">{p.Plz}</p>
    </Item>
  {/if}

</div>
