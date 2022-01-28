<script lang="ts">
    export let label = "";
    export let value : string
    export let regex = "";
    export let name
    export let valid = false;

    const validate = (value : string, regex : string) => {
        let reg = new RegExp(regex);
        if (value.length < 3) {
            return "Value must be at least 3 characters long";
        }
        else if(!reg.test(value)){
            return `Value must a valid ${label}`;
        }
        return "";
    }

    $: error = validate(value, regex)
    $: valid = error ? false : true;

</script>

<div class={`relative h-10 input-component ${value ? "" : "empty"}`}>
    <input
      id={name}
      type="text"
      name={name}
      class="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
      bind:value={value}
    />
    <label for="name" class="absolute left-2 transition-all bg-white px-1">
      {label}
    </label>
</div>
<label for={name} class=" bg-white px-1">
    {value ? error ? error : "" : ""}
</label>

<style>
    label {
      top: 0%;
      transform: translateY(-50%);
      font-size: 11px;
      color: rgba(37, 99, 235, 1);
    }
    .empty input:not(:focus) + label {
      top: 50%;
      transform: translateY(-50%);
      font-size: 14px;
    }
    input:not(:focus) + label {
      color: rgba(70, 70, 70, 1);
    }
    input {
      border-width: 1px;
    }
    input:focus {
      outline: none;
      border-color: rgba(37, 99, 235, 1);
    }
</style>