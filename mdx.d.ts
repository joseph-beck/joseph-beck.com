declare module '*.mdx' {
  const source: string

  export default source
}

declare module '*.mdx?raw' {
  const source: string

  export default source
}
