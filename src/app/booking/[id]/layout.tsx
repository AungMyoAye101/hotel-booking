
import Booking from '@/components/booking/booking'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const layout = ({ children }: Props) => {
    return <Booking>{children}</Booking>
}

export default layout