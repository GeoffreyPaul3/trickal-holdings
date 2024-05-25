import Image from 'next/image';
import CheckoutButton from './CheckoutButton';

const CardDetails = () => {
  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
        <Image
          src="/assets/images/card1.jpg"
          alt="hero image"
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover object-center"
        />

        <div className="flex w-full flex-col gap-8 p-5 md:p-10">
          <div className="flex flex-col gap-6">
            <h2 className='h2-bold'>Amazon Gift Card MW</h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex gap-3">
                <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700">
                  $20 - $1,000
                </p>
              </div>

            </div>
          </div>

          <CheckoutButton  />


          <div className="flex flex-col gap-2">
            <p className="p-bold-20 text-grey-600">What You&apos;ll Learn:</p>
            <p className="p-medium-16 lg:p-regular-18"></p>
            <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline"></p>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default CardDetails