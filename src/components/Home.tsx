import lendingImage from "../assets/money-transfer.svg"
import FeatureSection from "./FeatureSection";

const Home = () => {
    return ( 
        <>
        <div className="flex items-center max-w-[1024px] h-[80vh] mx-auto py-8">
            <div className="flex-1">
                <h1 className="text-6xl m-0 font-bold">Bitlease</h1>
                <p className="mt-2">An Interactive Web3 Lending and<br></br> borrowing platform</p>
                <div className="w-[120px] h-1 bg-purple-700 mt-2"></div>
            </div>

            <div className="flex-1">
                <img src={lendingImage} alt="lending and borrowing"/>
            </div>
        </div>
        <FeatureSection />
        </>
     );
}
 
export default Home;