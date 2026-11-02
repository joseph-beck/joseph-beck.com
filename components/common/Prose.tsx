import { type ReactNode } from 'react'

interface ProseProps {
  children: ReactNode
}

const Prose = ({ children }: ProseProps) => {
  return <div className="prose prose-invert">{children}</div>
}

export { Prose }
