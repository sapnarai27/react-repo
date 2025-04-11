import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

beforeEach(()=>{
  render(<Contact />); // If Render is same for all the test cases then rendering the commponent beforeEach is good 
                      // But if we have any component with diffrent props then we should not use this
})

describe("Contact Us Component", () => {

  it("should load heading in the component", () => {
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button in the component", () => {
    const button = screen.getByText("Submit"); // screen.getByRole('button');

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("should load input element in the component", () => {

    // Querying
    const input = screen.getByPlaceholderText("name");

    // console.log(input); // this will print piece of jsx or react element

    //Assertion
    expect(input).toBeInTheDocument();
  });

  it("should load 2 input elements in the component", () => {

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
  });
});
