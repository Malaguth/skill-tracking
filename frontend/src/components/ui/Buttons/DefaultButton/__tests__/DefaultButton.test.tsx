import { render, screen, fireEvent } from "@testing-library/react";
import DefaultButton from "../DefaultButton";

const TEXT_MOCK = "Test Button"

const setupButtonClick = ({buttonText}:{buttonText:string}) => {
    const dfButton = screen.getByText(buttonText)
    fireEvent.click(dfButton);
}

describe('Test DefaultButton', () =>{
    beforeEach(()=>{
        render(<DefaultButton label={TEXT_MOCK} onClick={()=>{console.log("clicked")}}/>)
        
    })
    it('test render rigth text',()=>{
        expect(screen.queryByText(TEXT_MOCK)).toBeTruthy()
    })

    it('test render wrong text',()=>{
        expect(screen.queryByText("wrong")).toBeFalsy()
    })

    it('should log "clicked" when button is clicked',()=>{
        const consoleSpy = jest.spyOn(console, 'log');
        setupButtonClick({buttonText:TEXT_MOCK})
        expect(consoleSpy).toHaveBeenCalledWith("clicked");
        consoleSpy.mockRestore();
    })

    it('should not log "wrong" when button is clicked',()=>{
        const consoleSpy = jest.spyOn(console, 'log');
        setupButtonClick({buttonText:TEXT_MOCK})
        expect(consoleSpy).not.toHaveBeenCalledWith("wrong");
        consoleSpy.mockRestore();
    })
})
