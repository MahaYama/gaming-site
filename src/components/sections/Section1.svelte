<script>
    import Button from "../buttons/Button.svelte";
</script>

<div class="container w-full max-w-full flex justify-center items-center bg-gray-500 relative">
    <div class="container w-lg flex justify-around absolute z-20">
        <div class="h-full">
            <h1 class="mt-2 text-6xl text-white font-bold">
                Defy The Limits
            </h1>
            <h2 class="mt-2 text-3xl text-white font-light">
                Stikom E-Sport Valorant Division
            </h2>
            <p class="mt-2 text-md text-white font-light">
                The first e-sport extracuricullar in bali. 
            </p>
        </div>
        <div class="">
            <canvas class="bg-black canvas">

            </canvas>
        </div>
    </div>
    <div class="static">
        <div class="z-10 bg-valorant-blue opacity-70 inset-0 absolute bg-blend-normal">
        </div>
        <div class="z-10 bg-gradient-to-b from-valorant-blue via-transparent to-valorant-blue inset-0 absolute bg-blend-normal">
        </div>
        <img class="z-1 grayscale" src="https://images7.alphacoders.com/120/thumb-1920-1203245.jpg" alt="valorant background image"/>
    </div>
</div>

<style>
    .canvas {
        top: 0;
        left: 0;
        width: 2/3;
        height: 4;
    }
</style>
