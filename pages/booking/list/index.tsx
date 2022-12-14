import { layanan } from "@prisma/client"
import { GetServerSideProps } from "next"
import styles from '../../../styles/Home.module.css'
import handler from "../../api/manajemen_layanan/get_layanan"

export function makeSerializable<T extends any> (o: T): T {
    return JSON.parse(JSON.stringify(o))
}

type Props = {
    layanan: layanan[]
}

export const getServerSideProps: GetServerSideProps = async () => {
    const result = await handler()
    return {
      props: { layanan: makeSerializable(result) },
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
                        <th className="border border-slate-600 p-8 text-left">Small</th>
                        <th className="border border-slate-600 p-8 text-left">Medium</th>
                        <th className="border border-slate-600 p-8 text-left">Large</th>
                    </tr>
                </thead>
                <tbody>
                {props.layanan && props.layanan.map((i) => (
                    <tr>
                        <td className="border border-slate-600 p-8 text-left">{i.id}</td>
                        <td className="border border-slate-600 p-8 text-left">{i.jenis}</td>
                        <td className="border border-slate-600 p-8 text-left">{i.small}</td>
                        <td className="border border-slate-600 p-8 text-left">{i.medium}</td>
                        <td className="border border-slate-600 p-8 text-left">{i.large}</td>
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