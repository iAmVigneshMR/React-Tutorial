import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from '@testing-library/user-event'

describe('Greeting Components', () => {
    test('renders Hello World as a test', () => {
        //Arrange
        render(<Greeting />);
    
        //Act
        //... nothing
    
        //Assert
        const helloWorldElement = screen.getByText('Hello world');
        expect(helloWorldElement).toBeInTheDocument();
    })

    test('renders good to see you text on button Not clicked', () => {
        //Arrange
        render(<Greeting/>)

        //Act
        const outputElement = screen.getByText('good to see you', {exact: false});
        expect(outputElement).toBeInTheDocument();
    })

    test('renders changed clicked on button clicked', () => {
        //Arrange
        render(<Greeting/>)

        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement);

        //Assert
        const outputElement = screen.getByText('Changed', {exact: false});
        expect(outputElement).toBeInTheDocument();
    })

    test('not render good to see text is if button is clicked', () => {
        //Arrange
        render(<Greeting /> );

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.queryByText('good to see you', {exact: false});
        expect(outputElement).toBeNull();
    })
})