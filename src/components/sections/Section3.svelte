<script>
    import { text } from "svelte/internal";
    import Button from "../buttons/Button.svelte";
    import { logos } from "../../data/GameLogoData";
</script>

<div class="container w-full max-w-full flex justify-center items-center bg-gray-500 relative">
    <div class="container w-lg flex flex-col items-center absolute z-20">
        <h1 class="mt-2 text-6xl text-white font-bold animate-floating">
            Pick Your Agent
        </h1>
        <h2 class="mt-2 text-2xl text-white font-light animate-floating">
            And join our team
        </h2>
        <Button href="/register" text="Join Us"/>
    </div>
    <div class="static">
        <div class="z-10 bg-valorant-blue opacity-70 inset-0 absolute bg-blend-normal">
        </div>
        <div class="z-10 bg-gradient-to-b from-valorant-blue via-transparent to-valorant-blue inset-0 absolute bg-blend-normal">
        </div>
        <img class="z-1 grayscale" src="https://images7.alphacoders.com/107/thumb-1920-1075657.jpg" alt="valorant background image"/>
    </div>
</div>
<div class="container w-full max-w-full flex justify-center bg-valorant-blue z-20 py-24">
    <div class="w-full px-28 flex justify-evenly h-16">
        {#each logos as logo}
            <img class="z-1 grayscale max-w-xs" src={logo} alt="logo game lain"/>
        {/each}
    </div>
</div>