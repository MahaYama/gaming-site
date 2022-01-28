<script>
    import Navbar from "../components/navbar/Navbar.svelte";
    import PageTransition from "../components/transition/PageTransition.svelte"
    export let key
    

    import "../app.css";
</script>

<script context="module">
    export const load = async ({ url }) => ({
      props: {
        key: url,
      },
    })
</script>

<Navbar/>
<PageTransition refresh={key}>
    <slot />
</PageTransition>