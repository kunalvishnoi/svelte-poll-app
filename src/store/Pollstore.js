import { writable } from "svelte/store";

const PollStore = writable([{question: 'Python or JavaScript?' , answerA: 'Python' , answerB: 'JavaScript' , votesA: 3 , votesB: 5 , id: 1}])

export default PollStore