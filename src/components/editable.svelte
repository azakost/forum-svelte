<script>
  export let description;

  function plainText(e) {
    e.preventDefault();
    let text = (e.originalEvent || e).clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
  }

  function format(operation) {
    let sel = document.getSelection();
    switch (operation) {
      case "step":
        document.execCommand(
          "insertHTML",
          false,
          "<quote placeholder='Type section title...'></quote><br>"
        );
        break;
      case "code":
        document.execCommand(
          "insertHTML",
          false,
          "<code placeholder='Paste code here...'></code><br>"
        );
        break;
      case "totext":
        document.execCommand("insertHTML", false, "<p>" + sel + "</p>");
        break;
      default:
        break;
    }
  }

  function setImage(e) {
    let input = e.currentTarget;
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        document.execCommand("insertImage", false, reader.result);
      };
      reader.readAsDataURL(input.files[0]);
      reader.onloadend = function(e) {
        let images = document.querySelectorAll("img[src*='data']");
        images.forEach(i => {
          i.style.maxWidth = "100%";
        });
      };
    }
  }
</script>

<style>
  p {
    min-height: 60px;
    background: var(--input-color);
    padding: 60px 20px 20px;
    width: 100%;
    box-sizing: border-box;
    word-wrap: break-word;
    font-size: 13px;
    line-height: 1.8;
    min-height: 180px;
  }

  .editor {
    position: relative;
    margin-top: 8px;
  }

  .format {
    position: absolute;
    top: 10px;
    left: 20px;
    right: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border-color);
    opacity: 0.6;
  }

  .format > * {
    font-size: 12px;
    padding: 4px;
    margin-right: 4px;
    cursor: pointer;
  }

  p:empty:not(:focus):before {
    content: attr(placeholder);
    pointer-events: none;
    display: block;
    font-size: 12px;
    color: #93999f;
  }
</style>

<input
  type="file"
  id="img-upload"
  style="display: none"
  on:change={setImage}
  accept=".jpg,.jpeg,.png,.gif" />
<div class="editor">
  <p
    id="field"
    contenteditable="true"
    on:paste={plainText}
    placeholder="Unlimited description"
    bind:innerHTML={description} />
  <div class="format">
    <i class="flag" on:click={() => format('step')} />
    <i class="code" on:click={() => format('code')} />
    <i class="align-left" on:click={() => format('totext')} />
    <label for="img-upload">
      <i class="image" />
    </label>
  </div>

</div>
