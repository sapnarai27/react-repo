import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantDetails from "../components/RestaurantDeatils";
import MOCK_RES_DETAILS from "../mocks/RestaurantDetailsMock.json";
import { act } from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_RES_DETAILS),
  })
);

describe("Restaurant Details Integration Testing", () => {
  it("should render the component with title", async () => {
    await act(async () => render(<RestaurantDetails />));
    expect(screen.getByText("Dindigul Thalappakatti")).toBeInTheDocument();
  });

  it("should render the component with menu accordion", async () => {
    await act(async () => render(<RestaurantDetails />));
    const menuAccordion = screen.getByText("Biryani Variety (9)");
    expect(menuAccordion).toBeInTheDocument();
  });

  it("should expand the accordion when user click on it", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <RestaurantDetails />
        </Provider>
      )
    );
    const menuAccordion = screen.getByText("Biryani Variety (9)");
    fireEvent.click(menuAccordion);
    expect(screen.getAllByTestId("menu-item").length).toBe(9);
  });

  it("should update the cart value to 1 when user click on add button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <RestaurantDetails />
            <Header />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );
    const menuAccordion = screen.getByText("Biryani Variety (9)");
    fireEvent.click(menuAccordion);

    expect(screen.getByText("Cart- (0 items)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", { name: "Add+" });

    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart- (1 items)")).toBeInTheDocument();
    expect(screen.getAllByTestId("menu-item").length).toBe(10); // 9 from Res details and 1 from Cart page
  });

  it("should update the cart value from 1 to 2 when user click on add button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <RestaurantDetails />
            <Header />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );
    const menuAccordion = screen.getByText("Biryani Variety (9)");
    fireEvent.click(menuAccordion);

    expect(screen.getByText("Cart- (1 items)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", { name: "Add+" });

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart- (2 items)")).toBeInTheDocument();
    expect(screen.getAllByTestId("menu-item").length).toBe(11); // 9 from Res details and 2 from Cart page
  });

  it("should clear the cart when user click on clear cart button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <RestaurantDetails />
            <Header />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );
   const clearCartBtn = screen.getByRole("button", {name: "Clear Cart"})
   fireEvent.click(clearCartBtn);
   expect(screen.getByText("Cart- (0 items)")).toBeInTheDocument();
   expect(screen.getByText("Your cart is empty. Please add items to it.")).toBeInTheDocument();
  });

  it("should remove the items from cart when user click on clear remove button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <RestaurantDetails />
            <Header />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );
    const menuAccordion = screen.getByText("Biryani Variety (9)");
    fireEvent.click(menuAccordion);
    const addBtns = screen.getAllByRole("button", { name: "Add+" });

    fireEvent.click(addBtns[0]);

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart- (2 items)")).toBeInTheDocument();
    expect(screen.getAllByTestId("menu-item").length).toBe(11); // 9 from Res details and 2 from Cart page

    const removeBtns = screen.getAllByRole("button", { name: "Remove" });
    fireEvent.click(removeBtns[0]);

    expect(screen.getByText("Cart- (1 items)")).toBeInTheDocument();
    expect(screen.getAllByTestId("menu-item").length).toBe(10); // 9 from Res details and 2 from Cart page
  });
});
