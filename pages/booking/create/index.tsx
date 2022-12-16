import styles from '../../../styles/Home.module.css'
export default function Create(){
    return(
        <div className={styles.container}>
            <div className="overflow-x-hidden overflow-y-auto m-10">
            <div className="flex flex-nowrap">
            <div className="flex-none p-4 m-2">
            </div>

            <div className="block rounded-lg shadow-lg bg-gray-400 w-1/2 h-auto text-left">
            <form action="/api/manajemen_booking/tambah_booking" method="post" className="flex-none">
            <div className="mb-3 w-full inline-flex">
                <div className="ml-10 my-5">
                <label htmlFor="exampleText0" className="form-label inline-block mb-2 text-white ml-2 mt-2"
                >Nomor:</label>
                </div>
                <div className="w-full mx-10 mr-5 mt-5">
                <input
                type="number"
                required
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
                id="layanan"
                name="layanan"
                placeholder="Nomor layanan"
                />
                </div>
            </div>
            <div className="mb-3 w-full inline-flex">
                <div className="ml-10 my-5">
                <label htmlFor="exampleText0" className="form-label inline-block mb-2 mr-1 text-white ml-2 mt-2"
                >Waktu: </label>
                </div>
                <div className="w-full mx-10 mr-5 mt-5">
                <input
                type="datetime-local"
                required
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
                id="waktu"
                name="waktu"
                placeholder="20/02/2011"
                />
                </div>
            </div>
            <div className="mb-3 w-full inline-flex">
                <div className="ml-10 my-5">
                <label htmlFor="exampleText0" className="form-label inline-block mb-2 text-white mr-1 mt-2"
                >Catatan: </label>
                </div>
                <div className="w-full mx-10 mr-5 mt-5">
                <input
                type="text"
                required
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
                id="pilihan"
                name="pilihan"
                placeholder="Ukuran layanan yang diinginkan dan catatan lain"
                />
                </div>
                </div>
                <button
                type="submit"
                className="
                    w-5/12
                    mx-80
                    px-6
                    my-5
                    py-2.5
                    bg-gray-500
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    object-right
                    rounded-full
                ">
                    Kirim
                </button>
            </form>
            </div>
        
        </div>

        </div>
        </div>
    )
}