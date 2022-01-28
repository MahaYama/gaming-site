<script>
    export let onclick = (e) => {
        console.log(e);
    }
    export let text
    export let href = ""
</script>

<a href={href} class="mt-5 overflow-hidden rounded-md px-3.5 py-2 m-1 relative group cursor-pointer font-medium text-white p-2 bg-red-600" on:click={onclick}>
    <span class="absolute animated-button h-0 transition-all duration-500 origin-left -translate-x-20 bg-valorant-blue top-1/2 group-hover:h-96 group-hover:-translate-y-32 ease "></span>
    <span class="relative transition duration-300 text-white ease font-bold text-xl py-5 px-10">{text}</span>
</a>

<style>
    .animated-button{
        width: 250px;
    }
</style>