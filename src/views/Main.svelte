<script lang="ts">
import { onDestroy, onMount,tick } from "svelte";
import Calendar from "../components/Calendar.svelte"
import TodoItem from "../components/TodoItem.svelte";
import { randomColor } from "../base/utils";
import axios from 'axios'
import { todoStore} from '../stores/todo.store'
import dayjs from 'dayjs'
import type { TodoParams } from "src/base/interface"
import {push} from 'svelte-spa-router'

let todos :TodoParams[] = []

const init = async() : Promise<TodoParams[]> =>{
    const result = await axios.get("mock.json")
    return result?.data
}

onMount(async()=>{
    todos = []
    console.log("onMount")
//     const result = await init()
//    result?.map((todo, index) => {
//         return {
//             ...todo,
//             id : index
//         }
//     })
//     .forEach((todo) => todoStore._update(todo)) 
//     await tick()
    todos = todoStore._get()
})

onDestroy(()=>{
    console.log("onDestry")
})

const onReset = () =>{
    todos = []
    todoStore._reset()
}

</script>

<main>
    <div class="header">
        <div class="header-title">
            <p>{dayjs().format('YYYY-MM-DD')}</p>
            <h1>To-Do List</h1>
            <button on:click={onReset}>Reset</button>
        </div>
    </div>
    <div class="main">
        <div class="main-calendar">
            <Calendar/>
        </div>
        <div class="main-todo">
            {#if todos.length === 0}
                <div id="main-todo-placeholder">
                    <h1>Not Todo</h1>
                </div>
            {:else}
                {#each todos as todo}
                    <TodoItem color={randomColor.color} txt={todo.txt} isComplete={todo.isComplete}/>
                {/each}
            {/if}
        </div>
    </div>
    <div class="footer">
        <button on:click={()=>push('/write')} id="btn-create-todo"></button>
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
        flex-direction: column;
    }

    .footer{
        flex : 1;
        justify-content: center;
        margin-top: 30px;
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

    /*
    * main
    */

    #main-todo-placeholder{
        display: flex;
        justify-content: center;
    }

    .main-calendar {
        display: flex;
        justify-content: center;
    }

    #btn-create-todo{
        border: none;
        width : 50px;
        height : 50px;
        border-radius: 50%;
        background-color: blue;
    }

    
</style>