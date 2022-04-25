<script>
    import PollDetail  from './PollDetail.svelte';
    import PollStore from '../store/Pollstore';
    import {fade, slide , scale} from 'svelte/transition';
	import {flip} from 'svelte/animate';

</script>
<p id="title">Poll List</p>
<div class="poll-list">
    {#each $PollStore as poll}
    <div in:fade out:scale|local animation:flip={{duration:500}} role="listbox">
	    <PollDetail  {poll} on:vote />
    </div>
    {/each}
</div>

<style>
     .poll-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>