import { render, screen } from "@testing-library/react"
import MenuItem from "./MenuItem"

const testItem = {
  image: "http://test.com/image",
  name: 'Test Item',
  price: '$4'
}
describe('MenuItem Component', () => {
  beforeEach(() => {
    render(<MenuItem item={testItem}/>)
  })
  it('should render properly', async() => {
    expect((await screen.findByRole('img')).getAttribute('src')).toContain(encodeURIComponent(testItem.image))
    
    expect(screen.queryByTestId('dish-price').textContent).toBe(testItem.price)
    expect(screen.queryByTestId('dish-name').textContent).toBe(testItem.name)
  })
})
