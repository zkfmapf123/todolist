<script lang="ts">
import { todoStore } from "../stores/todo.store";
import {push} from 'svelte-spa-router'


    let todoTxt

    const onCreate  = async() =>{
        todoStore._update({
            txt : todoTxt,
            isComplete : false
        })

        push("/")
    }

</script>

<main>
    <div class="write-header">
        <input type="text" placeholder="Write Task Here" bind:value={todoTxt}>
    </div>
    <div id="spacer"></div>
    <div class="write-btn">
        <button on:click={onCreate}>Create</button>
    </div>
</main>

<style>
    .write-header, .write-btn {
        display: flex;
        flex : 1;
        flex-direction: column;
        align-items: center;
    }

    #spacer {
        margin : 20px 0px
    }

    .write-header {
        justify-content:flex-end;
    }

    .write-btn{
        justify-content: flex-start;
    }
</style>