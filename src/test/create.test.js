


import { render, screen , fireEvent } from '@testing-library/svelte';
import App from '../App.svelte';

describe('Create Todo Test' , ()=> {
   
    

    test( 'Testing' , async () => {
        render(App);
        await fireEvent.click(screen.getByText("Add New Poll"));
        
        const input = screen.getByLabelText("Question");
        
        const value1 = "Seco";
        await fireEvent.input(input, { target: { value:value1 } });


        const input2 = screen.getByLabelText("Answer A");
        const value2 = "Firs";
        await fireEvent.input(input2, { target: { value:value2 } });

        const input3 = screen.getByLabelText("Answer B");
        const value3 = "Sec";
        await fireEvent.input(input3, { target: { value:value3 } });

        await fireEvent.click(screen.getByText("Add Poll"));
        const node = screen.queryByText("Poll List");
        const node1 = screen.queryByText("Second Question");
        const node2 = screen.queryByText("First Option 0");
        const node3 = screen.queryByText("Second Option 0");
        const node4 = screen.queryByText("Atleast 5 characters required!");
        const node5 = screen.queryByText("AnswerA should not be empty!");
        const node6 = screen.queryByText("AnswerB should not be empty!");
        

        expect(node).toBeNull();
        expect(node1).toBeNull();
        expect(node2).toBeNull();
        expect(node3).toBeNull();
        if(value1.length < 5) {expect(node4).not.toBeNull();}
        if(value2.length < 0) { expect(node5).not.toBeNull();}
        if(value3.length < 0) { expect(node6).not.toBeNull();}

    })

    test( 'Testing' , async () => {
        const items = 1;
        const {getAllByRole} = render(App);

        const allItems1 = getAllByRole("listbox");
       
        await fireEvent.click(screen.getByText("Add New Poll"));


        
        const input = screen.getByLabelText("Question");
        
        const value1 = "Second Question";
        await fireEvent.input(input, { target: { value:value1 } });
        

        const input2 = screen.getByLabelText("Answer A");
        const value2 = "First Option";
        await fireEvent.input(input2, { target: { value:value2 } });

        const input3 = screen.getByLabelText("Answer B");
        const value3 = "Second Option";
        await fireEvent.input(input3, { target: { value:value3 } });

        

        await fireEvent.click(screen.getByText("Add Poll"));

        const allItems = screen.getAllByRole("listbox");
        
        const node = screen.queryByText("Poll List");
        const node1 = screen.queryByText("Second Question");
        const node2 = screen.queryByText("First Option 0");
        const node3 = screen.queryByText("Second Option 0");

        expect(node).not.toBeNull();
        expect(node1).not.toBeNull();
        expect(node2).not.toBeNull();
        expect(node3).not.toBeNull();
        expect(allItems.length).toBe(items + 1);

    })
})