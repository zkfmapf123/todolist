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

</script>

<main>
    <div class="header">
        <div class="header-title">
            <p>Friday.May 11</p>
            <h1>To-Do List</h1>
        </div>
    </div>
    <div class="main">

    </div>
    <div class="footer">

    </div>
</main>

<style>
    .header, .main, .footer{
        display: flex;
    }

    .header {
        flex :0.5;
        flex-direction: column;
    }

    .main {
        flex : 2;
        border: 1px solid black;
    }

    .footer{
        flex : 1;
        border: 1px solid green;
    }

    /*
    * header title
    */
    .header-title {
        display: flex;
        flex : 1;
        flex-direction: column;
        justify-content: center;
        padding-left: 10%;
    }

    .header-title p {
        color: gray;
        font-size: 12px;
        margin-bottom: 10px;
    }

    .header-title h1 {
        font-size : 20px;
    }

    
</style>