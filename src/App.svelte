<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import CreatePoll from './components/CreatePoll.svelte';
	import PollList from './components/PollList.svelte';
	import Tabs from './shared/Tabs.svelte';
	
	const items = ['Current Polls' , 'Add New Poll'];
	let currentItem = 'Current Polls';

	const changeTab = (ev) => {
		currentItem = ev.detail;
	}
	const addPoll = (ev) => {
		
		currentItem = 'Current Polls';
	}

</script>
<Header/>
<main>
	
	<Tabs {items} {currentItem} on:changeTab={changeTab}/>
	{#if currentItem === 'Current Polls'}
		<PollList  />
	{:else if currentItem === 'Add New Poll'}
	<CreatePoll on:addPoll={addPoll}/>
	{/if}
</main>
<Footer/>

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
		
	}
</style>