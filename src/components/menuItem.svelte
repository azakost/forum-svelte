<script>
  import { location } from "svelte-spa-router";

  export let href;
  export let icon = "";
  export let mHidden = false;
  export let title = "";
</script>

<style>
  /* Tablets and medium screens */
  @media only screen and (max-width: 1265px) {
    .right {
      display: none;
    }
    .left {
      width: 88px !important;
      margin: 0 !important;
    }
  }

  /* Mobile Layout */
  @media only screen and (max-width: 500px) {
    .item {
      height: auto !important;
    }

    .left {
      width: 46.25px !important;
    }
    a:last-child {
      position: initial !important;
      width: 46.25px !important;
    }

    .hiden-item {
      display: none;
    }
  }

  /* Large Screens */
  i {
    font-size: 24px;
  }

  span {
    font-size: 18px;
  }

  .item {
    height: 46px;
    margin: 12px 0;
    color: var(--text-color);
  }

  .item:hover {
    color: var(--secondary-color);
    opacity: 0.5;
  }

  .left {
    width: 60px;
    margin-left: 22px;
    display: flex;
    justify-content: center;
  }

  [aria-current="page"] {
    color: var(--secondary-color);
    font-weight: bold;
  }

  [aria-current="page"]:hover {
    opacity: 1;
  }

  a:last-child {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  a:first-child {
    margin-bottom: 30px;
  }
</style>

<a
  href="/#{href}"
  class="item va {mHidden ? 'hiden-item' : ''}"
  aria-current={$location == href ? 'page' : ''}>
  <div class="left">
    <slot name="left">
      <i class={icon} />
    </slot>
  </div>

  <div class="right">
    <slot name="right">
      <span>{title}</span>
    </slot>
    <slot name="head" />
    <slot name="sub" />

    <!-- /// ->>
    <!-- Tempororay - To get rid of bug with svelte warning -->
    <slot />
    <!-- /// -->
  </div>
</a>
