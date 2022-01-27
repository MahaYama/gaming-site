<script lang='ts'>
    import type { Player } from "src/interfaces/PlayerInterface";

    import { onMount } from "svelte";

    import { players } from "../../data/PlayerData";
    import Picker from "../picker/Picker.svelte";

    let picked : Player

    onMount(() => {
        if(!picked){
        picked = players[0]
        }
    })
</script>

<div class="container w-full max-w-full flex justify-center items-center bg-valorant-blue relative max-h-screen overflow-visible min-h-full py-20">
    <div class="container w-xl flex justify-evenly items-center z-20">
        <div class="flex flex-col">
            {#each players as player}
                 <Picker picked={picked} text={player.nickname} id={player.id}></Picker>
            {/each}
        </div>
            {#if picked}
                <img class="w-3/5 overflow-hidden animate-floating" src={picked.agentpicture} alt={picked.name}/>
            {/if}
        <div class="flex flex-col justify-start">
            {#if picked}
                <h2 class="text-6xl text-white font-bold">
                    {picked.nickname}
                </h2>
                 <h3 class="text-3xl text-white font-bold">
                     {picked.name}
                 </h3>
                 <h4 class="text-xl text-white font-bold">
                     {picked.role} {picked.agent}
                 </h4>
                 <p class="text-md text-white font-light mt-2">
                     {picked.desc}
                 </p>
            {/if}
        </div>
    </div>
</div>