<script>
    import { page } from "$app/stores";

    export let href
    export let text
    
    $: path = $page.url.pathname
</script>

<a href={href} class="flex justify-center items-start">
    <h2 class={`mt-2 text-xl text-white font-bold cursor-pointer ${href == path ? "text-red-500" : "hover:translate-y-2 animate ease-in-out duration-300"}`}>
        {text}
    </h2>
</a>