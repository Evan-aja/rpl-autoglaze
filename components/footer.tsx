export default function Footer(){
    return (
      <footer className="pb-4 text-sm leading-6 bg-red-800 bottom-0 w-full fixed">
        <div className="max-w-2xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
          <div className="flex-none space-y-10 lg:space-y-8 xl:flex xl:space-y-0">
            <div className="xl:flex-none xl:w-1/2">
              <div className="flex-col">
                <h3 className="w-5/6 mt-4 text-white text-2xl font-bold">SOCIAL MEDIA</h3>
                <div className="flex">
                <svg className="w-14 h-14 mt-2">
                    <image id="image0_12_25" width="50" height="50" xlinkHref="data:image/png;base64,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"/>
                </svg>
                <svg className="w-14 h-14 mt-2">
                    <image id="image0_12_26" width="50" height="50" xlinkHref="data:image/png;base64,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"/>
                </svg>
                
                <svg className="w-14 h-14 mt-2">
                    <image id="image0_12_28" width="50" height="50" xlinkHref="data:image/png;base64,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"/>
                </svg>
                </div>
              </div>
            </div>
            <div className="lg:flex-none lg:w-1/2">
              <div className="flex-col">
              <h3 className="w-5/6 mt-4 text-white text-2xl font-bold">HEAD OFFICE</h3>
              <div className="flex">
                    <p className="text-white w-3/4 mt-4">Jalan Joyo Mulyo No.324, Merjosari, Lowokwaru, Malang - Jawa Timur</p>
                </div>
              </div>
            </div>
            <div className="lg:flex-none lg:w-1/2">
              <h1 className="text-black font-bold logo-bottom mt-4">Autoglaze Salon</h1>
            </div>
          </div>
        </div>
      </footer>
    )
}