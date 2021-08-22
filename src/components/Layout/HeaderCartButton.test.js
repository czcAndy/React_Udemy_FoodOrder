import { render } from "@testing-library/react";
import HeaderCartButton from "./HeaderCartButton";

describe("<HeaderCartButton>", () => {
    it('renders', () => {
        expect(render(<HeaderCartButton/>)).toBeTruthy();
    })
});
