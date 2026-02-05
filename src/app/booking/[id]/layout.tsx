
import Booking from '@/components/booking/booking'
import BookingDetail from '@/components/booking/booking-detail'
import Indicator from '@/components/booking/indicator'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const layout = ({ children }: Props) => {
    return <Booking>{children}</Booking>
}

export default layout