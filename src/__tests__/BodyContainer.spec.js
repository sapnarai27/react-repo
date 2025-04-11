import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BodyContainer from "../components/BodyContainer";
import { BrowserRouter } from "react-router-dom";
import MOCK_REST_LIST from "../mocks/RestaurantListMock";
import { act } from "react";
import "@testing-library/jest-dom";
import UserContext from "../context/UserContext";
import React from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_REST_LIST);
    },
  });
});

// Mock navigate
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("BodyContainer Component", () => {
  it("should render the BodyContainer component with serach text", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <BodyContainer />
        </BrowserRouter>
      )
    );
    const serachBtn = screen.getByRole("button", { name: "Search" });
    expect(serachBtn).toBeInTheDocument();
  });

  it("should search restaurant cards for search input pizza", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <BodyContainer />
        </BrowserRouter>
      )
    );
    const cardsBeforeSearch = screen.getAllByTestId("restuarant-card");
    expect(cardsBeforeSearch.length).toBe(20);

    const serachBtn = screen.getByRole("button", { name: "Search" });
    const serchText = screen.getByTestId("search-text");
    fireEvent.change(serchText, { target: { value: "pizza" } });
    fireEvent.click(serachBtn);

    const cardsAfterSearch = screen.getAllByTestId("restuarant-card");

    expect(cardsAfterSearch.length).toBe(2);
  });

  it("should filter top rated restaurant cards", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <BodyContainer />
        </BrowserRouter>
      )
    );
    const cardsBeforeFilter = screen.getAllByTestId("restuarant-card");
    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("restuarant-card");

    expect(cardsAfterFilter.length).toBe(7);
  });

  it("should call useNavigate when user click on card", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <BodyContainer />
        </BrowserRouter>
      )
    );
    const cards = screen.getAllByTestId("card-container");
    fireEvent.click(cards[0]);
    expect(mockNavigate).toHaveBeenCalledWith("/restDetails/10575");
  });

  it("should change user name based on the input value changed", async () => {
    const Wrapper = () => {
      const [userName, setUserName] = React.useState("Sapna Rai");
  
      return (
        <BrowserRouter>
          <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <BodyContainer />
          </UserContext.Provider>
        </BrowserRouter>
      );
    };
  
    await act(async () => {
      render(<Wrapper />);
    });
  
    const nameInput = screen.getByTestId("user-name-text");
  
    // Change the input value
    fireEvent.change(nameInput, { target: { value: "Siddhant" } });
  
    // Expect the new value to be reflected in the input
    expect(nameInput.value).toBe("Siddhant");
  });
  
});
