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




// ====================================================================

//method 2

// import { render, screen } from "@testing-library/react"
// import axios from "axios";
// import AboutUs from "./views/AboutUs/AboutUs"

// jest.mock('axios');

// describe("AboutUs Component", () => {
//     test("Renders get if request succeeds", async () => {
//     const getData = [
//             {
//                 "Id":1,
//                     "FirstName":"Seth",
//                     "LastName":"Bent",
//                     "Title":null,
//                     "Description":null,
//                     "ImageName":"Seth-Bent.jpg"
//               },
//               {
//                   "Id":2,
//                   "FirstName":"Taylor",
//                   "LastName":"Cahn","Title":null,
//                   "Description":null,
//                   "ImageName":"Taylor-Co-Founder.png"
//                 },
//                 {
//                   "Id":3,
//                   "FirstName":"Hunter",
//                   "LastName":"Molnar",
//                   "Title":null,
//                   "Description":null,
//                   "ImageName":"Hunter-Molnar.jpg"
//                 },
//                 {
//                     "Id":4,
//                     "FirstName":"Emily",
//                     "LastName":"Wilson",
//                     "Title":null,
//                     "Description":null,
//                     "ImageName":"Emily.png"
//                 }
//             ]
//             axios.get.mockResolvedValueOnce(() =>  
//                 Promise.resolve({data: {getData}})
//             )
//         render(<AboutUs />);

//         // const listItemElements = await screen.findAllByRole('listitem');
//         // expect(listItemElements).not.toHaveLength(0);
//     })
//     // it('fetches erroneously data from an API', async () => {
//     //     const errorMessage = 'Network Error'
  
//     //     axios.get.mockImplementationOnce(() =>
//     //     Promise.reject(new Error(errorMessage)),
//     //     );
//     //     await expect(AboutUs('react')).rejects.toThrow(errorMessage);
//     //   });
// })

// ====================================================================

//method 3

// describe('AboutUs', () => {
//     it('fetches successfully data from an API', async () => {
//       const data = {
//         data: {
//           hits: [
//               {
//                   "Id":1,
//                   "FirstName":"Seth",
//                   "LastName":"Bent",
//                   "Title":null,
//                   "Description":null,
//                   "ImageName":"Seth-Bent.jpg"
//             },
//             {
//                 "Id":2,
//                 "FirstName":"Taylor",
//                 "LastName":"Cahn","Title":null,
//                 "Description":null,
//                 "ImageName":"Taylor-Co-Founder.png"
//             },
//             {
//                 "Id":3,
//                 "FirstName":"Hunter",
//                 "LastName":"Molnar",
//                 "Title":null,
//                 "Description":null,
//                 "ImageName":"Hunter-Molnar.jpg"
//             },
//             {
//                 "Id":4,
//                 "FirstName":"Emily",
//                 "LastName":"Wilson",
//                 "Title":null,
//                 "Description":null,
//                 "ImageName":"Emily.png"
//             }
//         ]
//         },
//       };
//       axios.get.mockImplementationOnce(() => Promise.resolve(data));
//       await expect(AboutUs('react')).resolves.toEqual(data);
//       render(<AboutUs />)
//     });
  
//     it('fetches erroneously data from an API', async () => {
//       const errorMessage = 'Network Error'

//       axios.get.mockImplementationOnce(() =>
//       Promise.reject(new Error(errorMessage)),
//       );
//       await expect(AboutUs('react')).rejects.toThrow(errorMessage);
//     });
//   });



// ====================================================================

//method 4



// import React from 'react'
// import Enzyme, { mount, shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16';
// import axios from 'axios';
// import { act,renderhook, Simulate } from 'react-dom/test-utils';
// import { ClickAwayListener } from '@material-ui/core';
// import AboutUs from './AboutUs';
// Enzyme.configure({ adapter: new Adapter() });

// describe('MyComponent', () => {
//   it('mocks API call', async () => {
//     const response = { data:[]};
//     console.log(response);
//     jest.spyOn(axios, 'get').mockResolvedValueOnce(response);
//     const wrapper = shallow(<AboutUs/>);
//     await (async () => {
//       await new Promise((resolve) => setTimeout(resolve, 0));
//     });
    
//     // expect(axios.get).toBeCalledWith('https://stgmvpapi.stortrack.com/api/palette/getstoreprofile/26515');
//   });

// });




// describe("AboutUs testing", () => {
//     const wrapper = shallow(<AboutUs/>)
//     test("Component renders correctly", () => {
//       // expect(wrapper).toMatchSnapshot();
//     });
//   });
