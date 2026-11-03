import { BrandButton } from '@/components/common/BrandButton'
import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
import { Link } from '@/components/ui/Link'
import { Typography } from '@/components/ui/Typography'

const Page = () => {
  return (
    <Container>
      <Stack className="w-full">
        <Typography variant="h2">
          joseph{' '}
          <Typography className="text-primary" variant="span">
            beck
          </Typography>
        </Typography>
        <Stack className="flex max-w-xl">
          <Typography variant="p">hi i&apos;m joseph, a full stack developer at mohc</Typography>
          <Stack orientation="horizontal">
            <Link href="https://linkedin.com/in/josephbbeck/" target="_blank">
              <BrandButton brand="linkedin">connect on linkedin</BrandButton>
            </Link>
            <Link href="https://github.com/joseph-beck" target="_blank">
              <BrandButton brand="github" variant="outline">
                check out out my github
              </BrandButton>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Page
