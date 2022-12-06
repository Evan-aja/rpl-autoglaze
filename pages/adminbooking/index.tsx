import { booking } from "@prisma/client"
import { GetServerSideProps } from "next"
import React from "react"
import handler from "../api/manajemen_booking/get_booking"

export function makeSerializable<T extends any> (o: T): T {
    return JSON.parse(JSON.stringify(o))
}

type Props = {
    Booking: booking[]
}

export const getServerSideProps: GetServerSideProps = async () => {
    const result = await handler()
    return {
      props: { Booking: makeSerializable(result) },
    }
}

const Adminbooking: React.FC<Props> = props =>{
    return (
        <> 
           {props.Booking && props.Booking.map((i) => (
            <div className="body">
            <div className="flex flex-nowrap">
    
            <div className="flex-none p-4 m-2">
            <div className="relative">
                <div className="relative">
                </div>
                <div className="w-full ml-5">
                </div>
                <div className="relative">
                </div>
                
            </div>
            </div>
    
            <form  className="block rounded-lg shadow-lg bg-gray-400 w-1/2 h-auto text-left mb-10 mt-2">
            <input hidden readOnly placeholder={i.customer_id.toString()}/>
            <div className="flex-none">
            <div className="Submission1">
                <div className="mb-3 w-full inline-flex">
                    <label htmlFor="exampleText0" className="form-label inline-block mb-2 text-white ml-5 mt-6"
                    >Nama:</label>
                    <div className="w-full ml-10 mr-5 mt-5">
                    <input
                    type="text"
                    className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="Nama"
                    name="Nama"
                    placeholder={i.customer_id?.toString()}
                    />
                    </div>
                </div>
            </div>
            <div className="Submission2">
                <div className="mb-3 w-full inline-flex">
                    <label htmlFor="exampleText0" className="form-label inline-block mb-2 text-white ml-5 mt-2"
                    >NIP/NIM:</label>
                    <div className="w-full ml-5 mr-5">
                    <input
                    type="text"
                    className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="NIP/NIM"
                    name="NIP/NIM"
                    placeholder={i.layanan_id.toString()}
                    />
                    </div>
                </div>
            </div>
            <div className="Submission3">
                <div className="mb-3 w-full inline-flex">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label inline-block mb-2 text-white ml-5 mt-2"
                    >Penjelasan:</label>
                    <div className="w-full ml-2 mr-5">
                    <textarea
                    className="
                        form-control
                        block
                        w-full
                        h-20
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="Penjelasan"
                    name="Penjelasan"
                    placeholder={i.waktu?.toString()}
                    />
                    </div>
                </div>
                <div className="flex mt-3 mb-5">
                <button type="submit" className="
                w-5/12
                px-6
                py-2.5
                bg-gray-500
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                object-right
                max-mx-32
                ml-26
                mr-20
                rounded-full
                ">Terima</button>
                <button type="submit" className="
                w-5/12
                px-6
                py-2.5
                bg-gray-500
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                object-right
                max-mx-32
                ml-20
                mr-5
                rounded-full
                ">Tolak</button>
                </div>
            </div>
            </div>
            </form>
                    
        </div>
        </div>
        ))}
        </>
    )
}
export default Adminbooking