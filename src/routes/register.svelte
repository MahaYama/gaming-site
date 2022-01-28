<script lang="ts">
import Button from "../components/buttons/Button.svelte";
import OutlinedButton from "../components/buttons/OutlinedButton.svelte";
import type { Form } from "../interfaces/FormInterface";

import InputElement from "../components/input/InputElement.svelte";

    let forms = [
        {
            "value" : "",
            "name" : "name",
            "label" : "Name",
            "regex" : "",
            "valid" : false,
        },
        {
            "value" : "",
            "name" : "nick",
            "label" : "Nickname",
            "regex" : "",
            "valid" : false,
        },
        {
            "value" : "",
            "name" : "email",
            "label" : "Email",
            "regex" : "",
            "valid" : false,
        },
        {
            "value" : "",
            "name" : "nim",
            "label" : "Nim",
            "regex" : "",
            "valid" : false,
        },
        {
            "value" : "",
            "name" : "phone",
            "label" : "Phone",
            "regex" : "",
            "valid" : false,
        }
    ]

    const validChecker = (forms : Form[]) => {
        let valid = true;
        forms.forEach(form => {
            if(!form.valid) valid = false;
        })
        return valid;
    }

    $: valid = validChecker(forms);

    const submitPush = () => {
        if(valid) {
            let data = {};
            forms.forEach(form => {
                data[form.name] = form.value;
            })
            console.log(data);
        }
    }

</script>
<div class="container w-full max-w-full flex justify-center items-center bg-valorant-blue relative overflow-visible min-h-screen py-20">
    <div class="container w-xl flex justify-evenly items-center z-20 static">
        <div class="relative mt-16 w-1/3 lg:block hidden animate-floating">
            <div class="static still pl-10 pt-12">
                <img src="/jett_still.png" alt="jett still">
            </div>
            <div class="absolute top-0 left-0">
                <img src="/jett_nohead.webp" alt="jett nohead">
            </div>
        </div>
        <div class="w-1/3">
            <div class="w-max bg-white flex flex-col items-center p-16">
                <h1 class="text-valorant-blue text-2xl font-bold mb-5">
                    Join Us
                </h1>
                <form class="mt-5">
                    {#each forms as form}
                        <InputElement bind:value={form.value} label={form.label} name={form.name} bind:valid={form.valid}/>
                    {/each}
                    <div class="w-full h-full overflow-hidden flex">
                        <OutlinedButton text="Reset"></OutlinedButton>
                        <Button text="Submit"></Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="absolute inset-0">
        <div class="z-10 bg-valorant-blue opacity-90 inset-0 absolute bg-blend-normal">
        </div>
        <div class="absolute bottom-0 right-0 p-20">
            <h2 class="outline-title z-1 text-6xl text-valorant-blue font-bold">
                LAST DEBACLE
            </h2>
            <h2 class="outline-title z-1 text-6xl text-valorant-blue font-bold">
                DEFY THE LIMITS
            </h2>
        </div>
        <div class="absolute top-0 left-0 p-20">
            <h2 class="outline-title z-1 text-6xl text-valorant-blue font-bold">
                JOIN OUR TEAM
            </h2>
            <h2 class="outline-title z-1 text-6xl text-valorant-blue font-bold">
                DEFY THE LIMITS
            </h2>
        </div>
        <div class="absolute top-0 right-0 mt-52">
            <h2 class="outline-title z-1 text-5xl text-valorant-blue font-bold transform rotate-90">
                TO INFINITY <br> AND BEYOND
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