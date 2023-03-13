import { render, screen } from '@testing-library/react'
import Menu from '../Menu'

describe('Menu', () => {
    it('renders Menu', async () => {
        const props = {
        }

        render(<Menu {...props}/>)

        const id = await screen.findByTestId('menu')

        expect(id).toBeDefined()
    })
})