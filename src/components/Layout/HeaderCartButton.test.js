import { fireEvent, getByRole, render } from "@testing-library/react";
import HeaderCartButton from "./HeaderCartButton";

describe("<HeaderCartButton>", () => {
    it('renders', () => {
        expect(render(<HeaderCartButton/>)).toBeTruthy();
    })

    it('forwads the click', ()=> {
        const handleClick = jest.fn();
        const {getByRole} = render(<HeaderCartButton onClick={handleClick}/>);
        fireEvent.click(getByRole('button'));
        expect(handleClick).toHaveBeenCalled();
    })
});
