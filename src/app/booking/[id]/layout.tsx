
import BookingDetail from '@/components/booking/booking-detail'
import Indicator from '@/components/booking/indicator'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const layout = ({ children }: Props) => {
    return (
        <div className="py-24 space-y-6 px-4">
            <Indicator />
            <div>
                <BookingDetail />
                <div>
                    {
                        children
                    }
                </div>
            </div>

        </div>
    )
}

export default layout