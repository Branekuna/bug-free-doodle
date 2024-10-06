import { CalendarSection } from '@/components/sections/CalendarSection'
import { Button } from '@/components/ui/button'

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Next.js Home Page</h1>
      <Button variant="default">Click meee</Button>
      <CalendarSection />
    </div>
  )
}

export default HomePage
