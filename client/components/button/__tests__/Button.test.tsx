import { render, screen } from '@testing-library/react'
import Button from '../Button'

describe('Button', () => {
    it('renders button', async () => {
        const props = {
            name: "Test"
        }

        render(<Button {...props}/>)

        const id = await screen.findByTestId('btn')

        expect(id).toBeDefined()
    })
})