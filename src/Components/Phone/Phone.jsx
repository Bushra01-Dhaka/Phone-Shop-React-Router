import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PerPhoneCard from "./PerPhoneCard";

const Phone = () => {
  const [phone, setPhone] = useState({});

  const { id } = useParams();

  const phones = useLoaderData();
  console.log(phones);

  useEffect(() => {

    
    const findPhone = phones?.find((phone) => phone.id === id);

    setPhone(findPhone);
  }, [id, phones]);


  return (
    <div>
      <PerPhoneCard phone={phone}></PerPhoneCard>
    </div>
  );
};

export default Phone;