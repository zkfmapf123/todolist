<script lang="ts">
    import { afterUpdate, onDestroy, onMount,beforeUpdate } from "svelte";

beforeUpdate(()=>{
    console.log("beforeupdate")
})

onMount(()=>{
    console.log("onMount")
})

afterUpdate(()=>{
    console.log("afterUpdate")
})

onDestroy(()=>{
    console.log("onDestroy")
})

console.log("hello world")
</script>

<main>
    <h1>Statistics</h1>
</main>

<style>

</style>