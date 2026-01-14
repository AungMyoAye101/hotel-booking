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
                className='h-screen w-full  absolute -z-20  object-center object-cover brightness-50 blur-[1.5px]'
            />
            {/* <div className="absolute -z-10 inset-0 bg-black/60 " /> */}
            <div >
                <h2 className='text-2xl  text-white ' >Welcome to Booking </h2>
                <h1 className='text-5xl font-bold text-white mb-4'>
                    Find your next stay with us

                </h1>
                <InputCon />
                <div>




                </div>
            </div>

        </section>
    )
}

export default Hero