<script lang="ts">
    import type { Player } from "src/interfaces/PlayerInterface";
    import { createEventDispatcher } from 'svelte';

    export let text : string
    export let id : number
    export let picked : Player

    const dispatch = createEventDispatcher();

	function dispatchID() {
		dispatch('pick', {
			id: id
		});
	}
</script>

<div class="flex justify-center" on:click={dispatchID}>
    <h2 class="mt-2 text-lg text-white font-light mr-2">
        {id}
    </h2>
    <h2 class={`mt-2 text-6xl text-white font-bold cursor-pointer ${picked ? picked.id == id ? "text-red-500" : "hover:translate-x-5 animate ease-in-out duration-300" : "hover:translate-x-5 animate ease-in-out duration-300"}`}>
        {text}
    </h2>
</div>