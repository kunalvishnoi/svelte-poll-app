import { render, screen , fireEvent , within } from '@testing-library/svelte';
import App from '../App.svelte';

    test('Delete Poll' , async ()=> {
        render(App);
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
        
        const elem = screen.queryAllByText("Delete")[0];
        await fireEvent.click(elem);

        await new Promise((r) => setTimeout(r, 501));
        
        const updatedPolls = screen.getAllByRole("listbox");
        
        expect(allItems.length).toBe(updatedPolls.length + 1);
    })