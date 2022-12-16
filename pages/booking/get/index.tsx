import { booking } from "@prisma/client"
import { GetServerSideProps } from "next"
import styles from '../../../styles/Home.module.css'
import handler from "../../api/manajemen_booking/get_booking"

export function makeSerializable<T extends any> (o: T): T {
    return JSON.parse(JSON.stringify(o))
}

type Props = {
    booking: booking[]
}

export const getServerSideProps: GetServerSideProps = async () => {
    const result = await handler()
    return {
      props: { booking: makeSerializable(result) },
    }
}

const List: React.FC<Props> = props =>{
    return(
        <div className={styles.container}>
            <div className="overflow-x-hidden overflow-y-auto p-20">
            <table className="table-auto border-separate border-spacing-2 border border-slate-500">
                <thead>
                    <tr>
                        <th className="border border-slate-600 p-8 text-left">Nomor</th>
                        <th className="border border-slate-600 p-8 text-left">Layanan</th>
                        <th className="border border-slate-600 p-8 text-left">Keterangan</th>
                        <th className="border border-slate-600 p-8 text-left">Pelanggan</th>
                        <th className="border border-slate-600 p-8 text-left">Waktu</th>

                    </tr>
                </thead>
                <tbody>
                {props.booking && props.booking.map((i) => (
                    <tr>
                        <td className="border border-slate-600 p-8 text-left">{i.id}</td>
                        <td className="border border-slate-600 p-8 text-left">{i.layanan_id}</td>
                        <td className="border border-slate-600 p-8 text-left">{i.keterangan}</td>
                        <td className="border border-slate-600 p-8 text-left">{i.customer_id}</td>
                        <td className="border border-slate-600 p-8 text-left">{i.waktu.toString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        <div className="m-24"/>
        </div>
        </div>
    )
}

export default List