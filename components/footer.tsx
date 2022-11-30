export default function Footer(){
    return (
      <footer className="pb-10 text-sm leading-6 bg-white absolute bottom-0 w-full">
        <div className="max-w-2xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
          <div className="flex-none space-y-10 lg:space-y-8 xl:flex xl:space-y-0">
            <div className="xl:flex-none xl:w-1/2">
              <div className="flex">
                <svg className="w-14 h-14 mt-2">
                  <image id="image0_28_7" width="52" height="52" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAAB+ElEQVRoge3ZvU4CQRSG4dc/SARFtBRuRe/CytpC8B4ouQdrWzsxVv6gokZCoa22djbYGizYTXAzy57Zmd0Z437JSZRd5syTgxPiQpEiRXzPKtACDoOfpdkFXoHPoF6AHeu708wmMAQmQQ2D1yR5n3lfWG8Z7FGcOr8xuqjo+8Jykg3gac6mRsBWwhregJIwUpQXoDrwrNhEPyidj59zUA14VGzgFlgDKsCl4nrcpJyCkjBhdFDOQFJMGCnKCUiK6QDdmd8lqNxBNeBB0VCFCa/poHIFxU2mD1RjMGF1Zq5XiT/9cgOlmUy0JJPKBWQDY4qyihlYwpigrGQ9A0xalNeYNChjzL1iUclppluS028S6auVCnCtWNDmZNJM6g71NxDvMJmhKsCVI4x1lA8YayifMMaouJtdYlKjVoAbxU1ZHM1pS3Kk94EywL7nGB3UAcDeH8BIUS2AJeAY+ABOPMbEoU6Bb+CChH81p8WcAY15CwdpAD0LKIDlpGYmk5FgwjQN+kRRmWAmGpgwJr260cUWYhqYRLXmvFjtt2i4mHcpQL6nAPmeAuR7CpDv+RegL8M1db+cmmQsuUn13EenesKNNoFzw14DCejIsEme1ZaAykwfC7rebFKNgJIEBLDtOWoU7FErJaYjHTD943ONGDN9EtJmzmR+AIVi74qlMXbqAAAAAElFTkSuQmCC"/>
                </svg>
                <p className="text-black ml-4 w-5/6 h-1 mt-3 font-extrabold leading-normal">Universitas Brawijaya 8 Veteran Road Malang, Indonesia - 65145</p>
              </div>
            </div>
            <div className="lg:flex-none lg:w-1/2">
              <div className="flex">
                <svg className="w-14 h-14 mt-2">
                  <image id="image0_28_8" width="52" height="52" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAADiUlEQVRogd3aPYgdVRQH8N+LujGJERRN4SJabhC/sNEmaTaKiGCrGAlbKCQGiwgJpDCFYArFwkJUsIgKGsSvdIKlQdSoaIjiFlZ+ZS2EDRsTdvMs7p1kMu+9eTPz5t339A//Yt+ce8/537kf555Zxo8F/B65kMDf2LABb6Bb4Fu4ZoJxNcIcftArJuNPuGNi0dXEEzhjsJiMZ/HMhGKshA143XAhRR7BpgnEW4o5fK++mIw/4vbkUQ9A1Sk2jGfweOLYL8OVOGx0IUW+hpmEOsAsjo8YeBm/wi2pxGwTDslxicm4hPlxCukI2+z5BGIyrmJ/9N0qNuFoQiFFvoeNbYmZFeb0pMRk/E4L6+o+adZLnXW1ramYR7GS62zSyOL4B7vqNt6vd3QmjWI8h6s0ugKv9mk8jYK6eFM44PtiPT4c0HBaBXXxgT6ZxVX4uKRRmaC2F34TPx9FDQiH1rtjcpRKUBfvRC32jtlRKkFd7OngD1wrbAhlWe6g9KPt9dXEz3ms4e/MsCukNk/jpHojlwr9YlrEQWG3uxhn3uBr3Ip7hHvJNB6s54TBn8fNeq8xPaqXcH/s5Do8Kby1YY7aWiuDsCgc+Fvi39v1T8v6OlvFAZfmc1n6nkpQPpYDMca+/ZY5PSa8pTKkEgSb8f6wfoc5XlReFEwlaA6nqvRbxflZk61LP6Z6ZanWqKauyDSpLNWeKqkqMrP4vEF8jeb/EnaMUcwolaXGi3oVh7CuRSFtVJYaN8x4VDtlpo4WKkujju6acBfpjtgPlwZntY2OmnANOwt9Xa/eLjgT2+SxM/addMpdwFOFQObxq/Dl7t4KYu7GCfyJhwrPdo0gqpGY3Tnn64WzIh/AmnBmbe4jZGO0z+diF6J9vjq6EH8fu6Bnc0634tsS21/wQM5+O34usT+JO3P2exuIqmW8LzrqCJfBlYrtjkRWsV2JfWc7575xCToYHdyIT2o6acJPcVMDUZWMnosd78BvCcRkPI2Ho+9DbQl6EVfrXfipmN8wnh9V0Mu4TfiUkVpIkadwF14osyvLFF4RPrd/6fKdZ1LYii+EUtVLg4w64msq4JhwF3lwLKGNjs+wjEeKDzrxQf6fiU4LGfQNSUJrjr+E9bUl99sy4TVOen20xePrhCL3/wVvE3KxsvTlv8ITcpn+LL6ZgqBGEZNlFRcxgz1CrXh5CoIcxuUY6+78m/kXOI404Rb0UGIAAAAASUVORK5CYII="/>
                </svg>
                <p className="text-black ml-4 w-5/6 h-1 mt-3 font-extrabold leading-normal">filkom@ub.ac.id</p>
              </div>
            </div>
            <div className="lg:flex-none lg:w-1/2">
              <div className="flex">
                <svg className="w-14 h-14 mt-2">
                  <image id="image0_28_9" width="52" height="52" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAAC1klEQVRoge3ZT4hWVRjH8c/cmTG0YAr/gCFEqUhNpMsQM2iVlKuKdCOmGxeZEG3CRRG0qJaiCEGbxIVQEUHiokWlEgZhYeJCJUQQ0wYydUCcGRdnLg2Tve895555zyv4hYd3dZ7n93vv4dznnof79DcDheuP4Fk8hYVYImi6ir9wCicwVkpgE0bxIX7HBKa6xCSOYgceLKD3rszDdpzU3UCnuIydGOyt/H+Zj1248D8CU+MYHu2hD7AR51oK7xQXsaYXRh7HN3NoZGaM4cm5NLMFf/fITB1nsSi3kREc6LGRmXFCxhNwNf4oaKaOz3OYeQXX+8BMHS+knucDeB97hXdMv3B1KGHRED7F1sxicnA9dsF8fK3dtriN0/gZN1rmmhnjWBFjZgTftyh4Hm/ikVk5P85gZhJvxJhZgB8Ti/0jtD/DHfJ/1MLMNWyKMfMAjiQW+wmPNagxjOMJ+X/Byhgzg/gy0cz+6T+jKUs07/3GsVvnp35XUvb3OLbFFppmFS51yf+FyKdSsznBzJjwBdqG5fhhVt7b+BZrU5OuEX+kXhbaoFyM4lW8qGXzOQ+/iTNzCU+3KTqXfCDezPIiShuwGrc0N3ML64sobchhcU/nrTIym7FOnJnDZWQ25ztxhnKeaNl5Qmjwmpo5WUZmd6rp3y3iroV/nQMtWagNvR65bmluITlZJG67TeEmlpUQ24SXxfdsU0K/1TeX5zWV0DOl8JzQMC7IJ6c9lTCXSWU9Dik4DZhNhYdb5nhJ+ITuCyph6NSWt/F8hjytqYTRX1sGhEFUcSrhXjoHfdEKVcKFXw5uZsrTikqYNP+ZIdexDDmysU/ay7WOCX2y5WpGxbc/M+Oz3kvuzkFpZs7goQJ6u7IYV8Q3qc+UENuU1zTfehPCvVnf865mht4pJTCFPTqbea+ctDQG8ZX/GpkUZqv3JEP4RJgm1BcjG4oqysSw9p8Y90nlDmOnp0vkLb3IAAAAAElFTkSuQmCC"/>
                </svg>
                <p className="text-black ml-4 w-5/6 h-1 mt-3 font-extrabold leading-normal">(0341) 577-911</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}