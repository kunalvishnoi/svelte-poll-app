<script>
import {createEventDispatcher} from 'svelte';
const dispatch = createEventDispatcher()
export let currentItem;
export let items;
</script>
<ul>
{#each items as item (item)}
    <li class:active={currentItem === item} on:click={()=> dispatch('changeTab' , item)}>{item}</li>
{/each}
</ul>
<style>
    ul {
        margin-bottom: 40px;
        display: flex;
        justify-content: center;
        list-style: none;
    }
    li {
        color: #444;
        margin: 0px 10px;
        padding-bottom: 10px;
        cursor: pointer;

    }

    .active {
        color: red;
        border-bottom: 1px solid red;
    }

</style>