interface Siapa{
    siapa: String,
}
export default function Sidebar(siapa:Siapa){
    if (siapa.siapa=="Dosen"){
        return (
            <>                    
                <aside className="w-64 right-0 absolute" aria-label="Sidebar">
                    <div className="overflow-y-auto py-4 px-3 bg-cyan rounded dark:bg-cyan">
                        <ul className="mt-4 mb-4 space-y-6">
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg width="16" height="16" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white"/>
                                </svg>
                                <span className="ml-3">Permintaan Konseling</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg width="16" height="16" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white"/>
                                </svg>
                                <span className="ml-3">Status</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg width="16" height="16" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white"/>
                                </svg>
                                <span className="ml-3">Komplain / Lapor</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg width="16" height="16" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white"/>
                                </svg>
                                <span className="ml-3">Jadwal</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </>
        )
    }
    else if (siapa.siapa=="Admin"){
        return (
            <>                    
                <aside className="w-64 right-0 absolute" aria-label="Sidebar">
                    <div className="overflow-y-auto py-4 px-3 bg-cyan rounded dark:bg-cyan">
                        <ul className="mt-4 mb-4 space-y-6">
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg width="16" height="16" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white"/>
                                </svg>
                                <span className="ml-3">Permintaan Konseling</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg width="16" height="16" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white"/>
                                </svg>
                                <span className="ml-3">Status</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg width="16" height="16" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white"/>
                                </svg>
                                <span className="ml-3">Komplain / Lapor</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg width="16" height="16" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white"/>
                                </svg>
                                <span className="ml-3">Jadwal</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg width="16" height="16" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white"/>
                                </svg>
                                <span className="ml-3">Daftar Laporan</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg width="16" height="16" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white"/>
                                </svg>
                                <span className="ml-3">Daftar Komplain</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </>
        )
    }
    return (
        <>                    
            <aside className="w-64 right-0 absolute" aria-label="Sidebar">
                <div className="overflow-y-auto py-4 px-3 bg-cyan rounded dark:bg-cyan">
                    <ul className="mt-4 mb-4 space-y-6">
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg width="16" height="16" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white"/>
                            </svg>
                            <span className="ml-3">Ajukan Konseling</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg width="16" height="16" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white"/>
                            </svg>
                            <span className="ml-3">Status</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg width="16" height="16" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white"/>
                            </svg>
                            <span className="ml-3">Komplain / Lapor</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}