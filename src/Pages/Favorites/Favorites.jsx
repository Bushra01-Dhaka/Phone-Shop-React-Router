import { useEffect, useState } from "react";
import PerPhoneCard from "../../Components/Phone/PerPhoneCard";

const Favorites = () => {

    const [favorites, setFavorites] = useState([]);
    const [noFound, setNoFound] = useState("");
    const [isShow, setIsShow] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const favItems = JSON.parse(localStorage.getItem('favorites'));
        if (favItems) {
            setFavorites(favItems);
            const total = favItems.reduce((preValue, currentItem) => preValue + currentItem.price, 0);
            const totalPP = total.toFixed(2);
            setTotalPrice(totalPP);
        }
        else {
            setNoFound("No Data Found");
        }
    }, [])


    const handleClearAll = () => {
        localStorage.clear();
        setFavorites([]);
        setNoFound("No Data Found");
    }

console.log(noFound);
    return (
        <div>

            <div className=" flex justify-center items-center">


                <div className="mt-12"> {noFound ? <p className="text-4xl ">{noFound}</p> : <div>
                    {
                        favorites.length > 0 && <div className="flex mx-auto gap-4 items-center justify-center my-4">
                            <button onClick={handleClearAll} className=" btn text-center bg-green-500 text-white p-4">Delete All Favorites</button>
                            <h1 className="text-xl font-medium text-green-500 underline">Total Price: ${totalPrice}</h1>
                        </div>
                    }
                </div>} 
             

                <div className="grid grid-cols-2 ">
                    {
                        isShow ? favorites.map(phone => <PerPhoneCard key={phone.id} phone={phone}></PerPhoneCard>) :
                            favorites.slice(0, 2).map(phone => <PerPhoneCard key={phone.id} phone={phone}></PerPhoneCard>)
                    }
                </div>

                


           

            <div className="flex justify-center mb-4">
                {
                    favorites.length > 2 && <button onClick={() => setIsShow(!isShow)} className=" mx-auto w-[20%] btn text-center bg-green-500 text-white p-4"> {isShow ? "Show Less" : "Show More"}</button>

                }

            </div>


            </div>
            </div>
            
        </div>

    );
};

export default Favorites;