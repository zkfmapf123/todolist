<script lang="ts">
    export let color : string
    export let txt : string
    export let isComplete :boolean
</script>

<div class="todo-item">
    <div id="todo-item-color">
        <p style="background-color: {color};"></p>
    </div>
    <div id="todo-item-txt">
        <p>{txt}</p>
    </div>
    <div id="todo-item-check">
        <input type="checkbox" name="isComplete" checked={isComplete}/>
    </div>
    <button id="todo-item-drop">
        <p>Drop</p>
    </button>
</div>
<div class="todo-bottom-line"></div>

<style>
    .todo-item{
        display: flex;
        flex : 1;
        flex-direction: row;
        align-items: center;
        padding : 15px 20px;
    }
    
    .todo-bottom-line {
        border: 1px solid gray;
        width : 350px;
        margin : 0 auto;
    }

    #todo-item-color, #todo-item-txt, #todo-item-check{
        display: flex;
        
    }

    #todo-item-color p {
        height: 15px;
        width: 15px;
        border-radius: 50%;
    }

    #todo-item-txt {
        flex : 2;
        justify-content: center;
    }

    #todo-item-check{
        flex : 1;
        justify-content: flex-end;
    }
</style>