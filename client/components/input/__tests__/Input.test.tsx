import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../Input";
import strings from '../../../utils/constants'

describe("Input", () => {
  const props = {
    label: "Last name",
    placeholder: "Enter text",
    isRequired: true,
    onInputChange: jest.fn(),
    type: 'text'
  };

  it("renders input field", async () => {
    render(<Input {...props} />);

    const inputEl = await screen.findByTestId("inputField");

    expect(inputEl).toBeInTheDocument();
  });

  it("renders input field and checks that has a label and a placeholder", async () => {
    render(<Input {...props} />);

    const labelEl = await screen.getByLabelText("Last name");

    expect(labelEl).toBeInTheDocument();
    expect(await screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("renders error field and checks for type email", async () => {
    const newProps = {...props, type: "email"}
    const comp = render(<Input {...newProps} />);
    const inputComp = comp.getByTestId("inputField");
    
    fireEvent.change(inputComp, {target: {value: "asdasdasd"}})
    fireEvent.blur(inputComp)

    const error = screen.getByText(strings.inputErrorPattern[newProps.type])
    
    expect(error).toBeInTheDocument();
  });

  it("should display no errors", async () => {
    
    const comp = render(<Input {...{...props, type: "email"}} />);
    const inputComp: any = comp.getByTestId("inputField");
    
    fireEvent.change(inputComp, {target: {value: "asd@gmail.com"}})
    fireEvent.blur(inputComp)
    
    expect(inputComp.value).toBe('asd@gmail.com');
  });

  it("renders error field and checks for type number", async () => {
    
    const comp = render(<Input {...{...props, type: "number"}} />);
    const inputComp = comp.getByTestId("inputField");
    
    fireEvent.change(inputComp, {target: {value: "22"}})
    fireEvent.blur(inputComp)
    expect(inputComp.value).toBe('22');
  });
});
