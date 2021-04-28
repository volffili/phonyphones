 import { render, fireEvent } from '@testing-library/react';
 import Home from './Home';

it("filteRenderCheck",()=>{
    const {queryByTitle} = render(<Home/>);
    const input = queryByTitle("search");
    expect(input).toBeTruthy();
})

describe("changeInInput", ()=>{
    it("onChange",()=>{
        const {queryByTitle,queryAllByTitle} = render(<Home/>);
        const input = queryByTitle("search"); 
        fireEvent.change(input,{ target:{ value:"Xiaomi" }}); 
        expect(input.value).toBe("Xiaomi");
        const tileHeadings = queryAllByTitle("tile-heading3");
        expect(tileHeadings.length).toBe(1);
        expect(tileHeadings[0].textContent).toBe("Xiaomi Redmi 9A");
    })
})

