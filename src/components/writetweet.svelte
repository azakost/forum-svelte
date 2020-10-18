<script>
  export let question;
  export let chosenCats;

  let cats = [
    { key: "golang", value: false },
    { key: "js", value: false },
    { key: "bash", value: false }
  ];

  function formCats() {
    const inArray = (array, name) => array.indexOf(name) > -1;
    setTimeout(() => {
      for (let cat of cats) {
        if (cat.value) {
          if (!inArray(chosenCats, cat.key)) chosenCats.push(cat.key);
        } else {
          let index = chosenCats.indexOf(cat.key);
          if (index > -1) {
            chosenCats.splice(index, 1);
          }
        }
      }
    }, 200);
  }

  let count = 140;
  function autosize(e, size) {
    count = 140 - question.length;
    e.currentTarget.style.height = "1px";
    e.currentTarget.style.height = size + e.currentTarget.scrollHeight + "px";
  }
</script>

<style>
  textarea {
    width: 100%;
    background: var(--input-color);
    box-sizing: border-box;
    color: var(--text-color);
    padding: 20px;
    line-height: 1.8;
    font-size: 12px;
  }

  textarea {
    height: 96px;
    border: none;
    resize: none;
    overflow: hidden;
  }

  .text {
    position: relative;
  }

  .tags {
    position: absolute;
    bottom: 0;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
  }

  .tags label {
    margin-right: 16px;
    font-size: 12px;
    cursor: pointer;
    opacity: 0.3;
    color: var(--secondary-color);
  }

  input {
    display: none;
  }

  input:checked + label {
    opacity: 1;
  }

  span {
    float: right;
    font-size: 10px;
    line-height: 25px;
    color: var(--secondary-color);
    opacity: 0.3;
  }
</style>

<div class="text">
  <textarea
    bind:value={question}
    placeholder="Question breif"
    maxlength="140"
    on:keyup={e => autosize(e, 34)} />

  <div class="tags">
    {#each cats as { key, value }}
      <input
        type="checkbox"
        id={key}
        bind:checked={value}
        on:click={formCats} />
      <label for={key}>#{key}</label>
    {/each}
    <span>{count}</span>
  </div>
</div>
