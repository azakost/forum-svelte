<script>
  import { pop, push, location } from "svelte-spa-router";
  import { language, login } from "../main";

  const pages = {
    "/": {
      title: {
        ru: "Вопросы",
        en: "Questions"
      },
      child: "/ask",
      icon: "edit"
    },
    "/instructions": {
      title: {
        ru: "Инструкции",
        en: "Instructions"
      },
      child: "/instructions/add",
      icon: "plus-circle"
    },
    "/ranking": {
      title: {
        ru: "Рейтинг",
        en: "Ranking"
      },
      child: "/ranking/rule",
      icon: "info"
    },
    "/profile": {
      title: {
        ru: "Профиль",
        en: "Profile"
      },
      child: "",
      icon: "log-out"
    },
    "/login": {
      title: {
        ru: "Логин",
        en: "Login"
      },
      child: "/login/register",
      icon: "user-plus"
    },
    "/login/register": {
      title: {
        ru: "Регистрация",
        en: "Registration"
      },
      child: null,
      icon: ""
    },
    "/ask": {
      title: {
        ru: "Спросить сообщество",
        en: "Ask community"
      },
      child: null,
      icon: ""
    }
  };

  $: title = pages[$location].title[$language];
  $: child = pages[$location].child;
  $: icon = pages[$location].icon;

  const dicionary = {
    en: {
      Fosho: "Are you sure?"
    },
    ru: {
      Fosho: "Вы уверены?"
    }
  };

  async function logout() {
    if (confirm(dicionary[$language].Fosho)) {
      login.set("false");
      localStorage.removeItem("username");
      localStorage.removeItem("fullname");
      localStorage.removeItem("login");
      let res = await fetch("http://localhost:8080/api/logout", {
        credentials: "include"
      });
      push("/");
    }
  }
</script>

<style>
  .header {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    justify-content: space-between;
    padding: 10.5px 16px;
    border-bottom: 1px solid var(--border-color);
    height: 34px;
    background: var(--topbar-color);
    z-index: 10;
    color: var(--text-color);
  }

  i {
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
  }

  .title > *:first-child {
    margin-right: 12px;
  }

  .hide {
    display: none;
  }
</style>

<div class="header va">
  <div class="title va">
    <i
      class="arrow-left {child != null ? 'hide' : ''}"
      on:click={() => pop()} />
    <h4>{title}</h4>
  </div>
  {#if $login == 'true' || $location == '/login'}
    <i
      class={child == null ? 'hide' : icon}
      on:click={() => ($location != '/profile' ? push(child) : logout())} />
  {/if}
</div>
