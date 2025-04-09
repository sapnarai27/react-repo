import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

test("test heading",()=>{
    render(<Contact/>)
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();

})