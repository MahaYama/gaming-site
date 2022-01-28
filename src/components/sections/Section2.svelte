<script lang='ts'>
    import type { Player } from "src/interfaces/PlayerInterface";
    import { fade, slide } from 'svelte/transition';

    import { onMount } from "svelte";

    import { players } from "../../data/PlayerData";
    import Picker from "../picker/Picker.svelte";

    let picked : Player | null

    const handlePick = (e : CustomEvent) => {
        picked = null
        setTimeout(() => {
            picked = players[e.detail.id - 1]
        }, 500)
    }

    onMount(() => {
        if(!picked){
        picked = players[0]
        }
    })
</script>

<div class="container w-full max-w-full flex justify-center items-center bg-valorant-blue relative max-h-screen overflow-visible min-h-screen py-20">
    <div class="container w-xl flex justify-between items-center z-20 static">
        <div class="flex flex-col justify-start items-start">
            {#each players as player}
                 <Picker picked={picked} text={player.nickname} id={player.id} on:pick={handlePick} data-aos="fade-up"></Picker>
            {/each}
        </div>
            {#if picked}
                <img class="w-82 overflow-hidden animate-floating" src={picked.agentpicture} alt={picked.name} transition:fade/>
            {/if}
        <div class="flex flex-col justify-start w-1/3" data-aos="fade-up">
            {#if picked}
                <h2 class="text-6xl text-white font-bold" transition:slide>
                    {picked.nickname}
                </h2>
                 <h3 class="text-3xl text-white font-bold" transition:slide|local>
                     {picked.name}
                 </h3>
                 <h4 class="text-xl text-white font-bold" transition:slide|local>
                     {picked.role} {picked.agent}
                 </h4>
                 <p class="text-md text-white font-light mt-2" transition:slide|local>
                     {picked.desc}
                 </p>
            {/if}
        </div>
    </div>
    <div class="absolute inset-0">
        <div class="z-10 bg-valorant-blue opacity-90 inset-0 absolute bg-blend-normal">
        </div>
        <div class="absolute bottom-0 right-0 p-20" data-aos="fade-up">
            <h2 class="outline-title z-1 text-6xl text-valorant-blue font-bold">
                OUR LAST TEAM
            </h2>
            <h2 class="outline-title z-1 text-6xl text-valorant-blue font-bold">
                OUR LAST TEAM
            </h2>
        </div>
        <div class="absolute top-0 left-0 p-20" data-aos="fade-left">
            <h2 class="outline-title z-1 text-6xl text-valorant-blue font-bold">
                OUR LAST TEAM
            </h2>
            <h2 class="outline-title z-1 text-6xl text-valorant-blue font-bold">
                OUR LAST TEAM
            </h2>
        </div>
        <div class="absolute top-0 right-0 mt-52" data-aos="fade-up">
            <h2 class="outline-title z-1 text-5xl text-valorant-blue font-bold transform rotate-90">
                DISSAPEARANCE <br> FROM REALITY
            </h2>
        </div>
    </div>
</div>

<style>
    .outline-title {
    text-shadow:
        1px 1px 0 #fff,
        -1px -1px 0 #fff,  
        1px -1px 0 #fff,
        -1px 1px 0 #fff,
        1px 1px 0 #fff;
    }
</style>