import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe("Async Component", () => {
    test("Renders posts if request succeeds", async () => {

        //here we can send dummy data using mock function instead of fecthing from real Api
        //if we fetch or send to real Api the data in the DB(database) may change so we can use mock Function
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post'}]
        })
        render(<Async />)

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    })
})