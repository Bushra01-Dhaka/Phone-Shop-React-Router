import { useLoaderData } from "react-router-dom";
import PhoneCard from "../PhoneCard/PhoneCard";

const Phones = () => {
    const phones = useLoaderData();
    console.log(phones);
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center">Our Phones Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                {
                    phones?.map(phone => <PhoneCard phone={phone} key={phone.id}></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Phones;