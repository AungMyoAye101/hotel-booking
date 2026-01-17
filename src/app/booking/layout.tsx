
import Indicator from '@/components/booking/indicator'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const layout = ({ children }: Props) => {
    return (
        <div className="py-24 space-y-6 ">
            <Indicator />
            {
                children
            }
        </div>
    )
}

export default layout