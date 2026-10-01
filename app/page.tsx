import { Stack } from '@/components/layout/Stack'
import { Button } from '@/components/ui/Button'
import { ButtonGroup } from '@/components/ui/ButtonGroup'
import { Typography } from '@/components/ui/Typography'

const Page = () => {
  return (
    <Stack className="flex min-h-svh p-6">
      <Typography variant="h2">joseph-beck.com</Typography>
      <ButtonGroup>
        <Button>experience</Button>
        <Button>projects</Button>
        <Button>blog</Button>
      </ButtonGroup>
    </Stack>
  )
}

export default Page
