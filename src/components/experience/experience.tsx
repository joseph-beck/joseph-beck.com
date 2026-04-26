import { type ReactElement, type ReactNode } from 'react'

import { Item, ItemContent, ItemDescription, ItemFooter, ItemTitle } from '@/ui/item'

interface ExperienceProps {
  title?: ReactNode
  description?: ReactNode
  children?: ReactNode
  footer?: ReactNode
}

const Experience = ({ title, description, children, footer }: ExperienceProps): ReactElement => {
  return (
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
        {children}
      </ItemContent>
      <ItemFooter>{footer}</ItemFooter>
    </Item>
  )
}

export { Experience }
