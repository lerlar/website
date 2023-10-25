import Image from "next/image";
import Container from "./shared/container";
import etherlinkMain from "../public/img/etherlinkMain.png";

export default function Main() {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={etherlinkMain}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Etherlink Pastel Green Blockchain Spiral"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="flex flex-col space-y-2 mb-10">
              <h1 className="text-5xl font-bold text-gray-300 mb-10">
                Build Web3 on <span className="text-borderGreen">Etherlink</span>
              </h1>
              <div className="text-xl leading-normal text-gray-500 text-left lg:text-xl xl:text-2xl dark:text-gray-300">
                An EVM-compatible optimistic rollup with:
                <ul className="list-disc list-inside mt-3 mb-3">
                  <li className="mb-1.5"><span className="text-borderGreen">fair ordering</span> of transactions</li>
                  <li className="mb-1.5"><span className="text-borderGreen">fast execution</span> of transactions</li>
                  <li> a high level of <span className="text-borderGreen">security</span></li>
                </ul>
                <div> powered by Tezos smart rollup technology.</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row l:items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center">
              <a
                href="https://docs.etherlink.com"
                target="_blank"
                rel="noopener"
                className="inline-block py-3 text-lg font-medium text-center text-black bg-white border-solid border-2 border-white rounded-md px-7 lg:px-10 lg:py-4 hover:bg-borderGreen hover:border-borderGreen hover:text-black">
                Start Building
              </a>
              <a
                href="https://bridge.ghostnet-evm.tzalpha.net/"
                target="_blank"
                rel="noopener"
                className="inline-block py-3 text-lg font-medium text-center text-white border-solid border-2 border-white rounded-md px-7 lg:px-6 lg:py-4 hover:bg-borderGreen hover:border-borderGreen hover:text-black">
                Bridge to Etherlink
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
