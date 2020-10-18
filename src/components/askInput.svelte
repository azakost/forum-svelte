<script>
  export let question;
  export let longText;
  export let files;
  export let hashes = [];

  const cats = ["#golang", "#js", "#bash", "#rust"];

  let hidden = "hide";
  let hiddenImg = "hide";
  let url;
  let count = 140;
  function autosize(e, size) {
    count = 140 - question.length;
    e.currentTarget.style.height = "1px";
    e.currentTarget.style.height = size + e.currentTarget.scrollHeight + "px";
  }

  function check(e) {
    let val = e.currentTarget.innerHTML;
    let style = e.currentTarget.style;
    if (style.opacity != 1) {
      style.opacity = 1;
      hashes.push(val);
    } else {
      style.opacity = 0.3;
      let index = hashes.indexOf(val);
      if (index > -1) {
        hashes.splice(index, 1);
      }
    }
  }

  function readURL(e) {
    let input = e.currentTarget;
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        url = e.target.result;
        hiddenImg = "";
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
</script>

<style>
  textarea {
    width: 100%;
    border: none;
    resize: none;
    background: var(--input-color);
    box-sizing: border-box;
    color: var(--text-color);
    padding: 20px;
    line-height: 1.8;
    overflow: hidden;
    height: 162px;
  }

  textarea:first-child {
    height: 96px;
  }

  button {
    background: var(--secondary-color);
    border: none;
    height: 32px;
    border-radius: 50px;
    width: 80px;
    color: var(--text-color);
    cursor: pointer;
  }

  .img {
    position: relative;
  }

  img {
    max-width: 100%;
  }

  button::-moz-focus-inner {
    border: 0;
  }

  input {
    display: none;
  }

  .foot {
    justify-content: space-between;
    padding: 16px;
  }

  .buttons {
    width: 80px;
    display: flex;
    justify-content: space-around;
  }

  i {
    cursor: pointer;
  }
  span {
    margin-right: 16px;
    font-size: 12px;
    cursor: pointer;
    opacity: 0.3;
    color: var(--secondary-color);
  }

  .text {
    position: relative;
  }

  .tags {
    position: absolute;
    bottom: 0;
    padding: 20px;
  }
  .long {
    position: relative;
  }
  .x {
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 12px;
    opacity: 0.6;
  }

  .hide {
    display: none;
  }
</style>

<div class="text">
  <textarea
    placeholder="What are you stuck in?"
    maxlength="140"
    on:keydown={e => autosize(e, 34)}
    bind:value={question} />
  <div class="tags va">
    {#each cats as cat}
      <span on:click={check}>{cat}</span>
    {/each}
  </div>
</div>
<div class="long {hidden}">
  <textarea
    placeholder="Unlimited text description"
    rows="8"
    on:keydown={e => autosize(e, 33)}
    bind:value={longText} />
  <i
    class="x"
    on:click={() => {
      if (longText.length != 0) {
        if (confirm('Are you sure?')) {
          hidden = 'hide';
          longText = '';
        }
      } else {
        hidden = 'hide';
        longText = '';
      }
    }} />
</div>
<div class="img {hiddenImg}">
  <img src={url} alt="upload" />
  <i
    class="x"
    on:click={() => {
      hiddenImg = 'hide';
      files = '';
    }} />
</div>

<div class="foot va">
  <div class="buttons va">
    <i
      class="align-left"
      on:click={() => {
        hidden = '';
        longText = '';
      }} />
    <div>
      <label for="upload">
        <i class="image" />
      </label>
      <input
        type="file"
        id="upload"
        on:change={readURL}
        bind:files
        accept=".jpg,.jpeg,.png,.gif" />
    </div>
  </div>
  <div>
    <span>{count}</span>
    <button on:click>Ask</button>
  </div>

</div>
