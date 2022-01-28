<script>
    import { links } from "../../data/RoutesData";
    import NavbarLink from "./NavbarLink.svelte";

</script>


<div class="container w-full max-w-full flex justify-center items-center bg-valorant-blue relative">
    <div class="container w-lg flex justify-between z-20 py-5">
        <div class="">
            <h1 class="mt-2 text-3xl text-white font-bold">
                STI-E
            </h1>
        </div>
        <div class="flex space-x-36 items-center">
            {#each links as link}
                <NavbarLink href={link.href} text={link.text}/>
            {/each}
        </div>
    </div>
</div>