declare module '*.mdx' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const frontmatter: Record<string, any>
}
