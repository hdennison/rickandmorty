import HelloWorld from '@/components/HelloWorld'
import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'



test('renders name', async () => {
  const { getByText } = render(<HelloWorld name="Vitest" />)
  await expect.element(getByText('Hello Vitest!')).toBeInTheDocument()
})
