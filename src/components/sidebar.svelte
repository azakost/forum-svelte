<script>
  import { language } from "../main";

  function change() {
    language.set("ru");
    localStorage.setItem("lang", "ru");
  }
</script>

<div class="sidebar">
  <button on:click={change}>EN</button>
</div>
