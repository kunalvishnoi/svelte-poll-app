<script>
import Button from '../shared/Button.svelte';
import {createEventDispatcher} from 'svelte';
import PollStore from '../store/Pollstore'

const data = {question: '' , answerA: '' , answerB: ''};
const error = {question: '' , answerA: '' , answerB: ''};
let valid = false;
const dispatch = createEventDispatcher()

const handleSubmit = () => {
   
    valid = true;
    if(data.question.trim().length < 5){
        valid = false;
        error.question = 'Atleast 5 characters required!';
    } else {
        error.question = '';
    }
    if(data.answerA.trim().length < 1){
        valid = false;
        error.answerA = 'AnswerA should not be empty!';
    }
    else {
        error.answerA = '';
    }

    if(data.answerB.trim().length < 1){
        valid = false;
        error.answerB = 'AnswerB should not be empty!';
    }
    else {
        error.answerB = '';
    }
    if(valid){
        const poll = {...data , votesA:0 , votesB: 0 , id: Math.random()};
        PollStore.update((currentPolls)=> {
            return [...currentPolls , poll];
        })
        dispatch('addPoll')
    }

}
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div class="field-data">
        <label for="question">Question</label>
        <input type="text" id="question" bind:value={data.question} />
        <div class="error">{error.question}</div>
    </div>
    <div class="field-data">
        <label for="answerA">Answer A</label>
        <input type="text" id="answerA" bind:value={data.answerA} />
        <div class="error">{error.answerA}</div>

    </div>
    <div class="field-data">
        <label for="answerB">Answer B</label>
        <input type="text" id="answerB" bind:value={data.answerB} />
        <div class="error">{error.answerB}</div>

    </div>
    <Button type="secondary" >Add Poll</Button>
</form>
<style>
    form {
        width: 400px;
        margin: 10px auto;
        text-align: center;
    }
    .field-data {
        margin: 18px auto;
    }
    input {
        width: 100%;
        margin: 10px auto;
    }
    label {
        text-align: left;
        margin: 10px auto;
    }
    .error {
        color: red;
        font-weight: bold;
        font-size: 12px;
    }
</style>

