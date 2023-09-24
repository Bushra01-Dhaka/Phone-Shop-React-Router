import swal from "sweetalert";
import PropTypes from 'prop-types';

const PerPhoneCard = ({ phone }) => {
    const { id, image, phone_name, brand_name } = phone;

    

    const handleAddToFav = () => {
        const addedFavArray = [];
        const favItems = JSON.parse(localStorage.getItem('favorites'));

        if (!favItems) {
            addedFavArray.push(phone);
            localStorage.setItem('favorites', JSON.stringify(addedFavArray));
            swal({
                title: "Product Added!",
                text: "You clicked the button!",
                icon: "success",
                button: "OK!",
                showCancelButton: false,
                confirmButtonColor: "#38a169",
            });
        }
        else {
            const isExist = favItems.find(phone => phone.id === id);
            if (!isExist) {
                addedFavArray.push(...favItems, phone);
                localStorage.setItem('favorites', JSON.stringify(addedFavArray));
                swal({
                    title: "Product Added!",
                    text: "You clicked the button!",
                    icon: "success",
                    button: "OK!",
                    showCancelButton: false,
                    confirmButtonColor: "#38a169",
                });
            }
            else {
                swal({
                    title: "Product Added!",
                    text: "You clicked the button!",
                    icon: "error",
                    button: "Ok!",
                    showCancelButton: false,
                    confirmButtonColor: "#38a169",

                });
            }

        }
    };
    return (
        <div>
            <div className=" flex justify-center items-center py-6">
                <div className="relative flex  items-center w-full max-w-[48rem] flex-row rounded-xl  bg-white bg-clip-border text-gray-700 shadow-lg">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={image}
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-green-500 antialiased">
                            {brand_name}
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {phone_name}
                        </h4>
                        <a className="inline-block" href="#">
                            <button onClick={handleAddToFav}
                                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase bg-green-500 text-white transition-all  hover:bg-green-400 active:bg-green-400/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Add To Favorites
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-4 text-white"


                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    ></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

PerPhoneCard.propTyes = {
    phone: PropTypes.object.isRequired
}

export default PerPhoneCard;