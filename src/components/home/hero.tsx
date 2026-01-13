import Image from 'next/image'
import InputCon from './input-con'


const Hero = () => {
    return (
        <section className='h-screen relative flex items-center justify-center'>
            <Image
                width={1400}
                height={1024}
                src={'/hotel-hero.png'}
                alt='hotel image'
                className='h-screen w-full  absolute -z-10  object-center object-cover'
            />
            <div>
                <h1 className='text-4xl font-bold text-white '>
                    Welcome to <span className='font-bold'>Booking </span>
                    Your Dream Stay Awaits

                </h1>
                <InputCon />
                <div>




                </div>
            </div>

        </section>
    )
}

export default Hero