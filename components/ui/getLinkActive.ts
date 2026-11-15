const getLinkActive = (pathname: string, href: string) => {
  return pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))
}

export { getLinkActive }
