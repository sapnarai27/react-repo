import { render, screen } from "@testing-library/react"
import RestaurantCard from "../components/RestaurantCard";
import MOCK_RES_DATA from '../mocks/RestaurantCardMock.json'
import "@testing-library/jest-dom";

describe("RestuarantCard Component",()=>{
    it("should render the component with props",()=>{
        render(<RestaurantCard resData={MOCK_RES_DATA}/>)
        const name = screen.getByText("ZAZA Mughal Biryani");
        expect(name).toBeInTheDocument();
    })
});

describe("withPromotedLabel HOC Component",()=>{
    it("should render the component with props",()=>{
       //ToDo
    })
});