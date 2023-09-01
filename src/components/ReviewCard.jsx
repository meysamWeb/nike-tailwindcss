import {star} from "../assets/icons/index.js";

const ReviewCard = ({imgURL, customerName, rating, feedBack}) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img
                src={imgURL}
                alt={customerName}
                className="rounded-full object-cover w-[120px] h-[120px]"
            />
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img
                    src={star}
                    alt="rating"
                    width={24}
                    height={24}
                    className="object-contain m-0"
                />
                <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
            </div>
            <h3 className="mt-3 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
            <p className="mt-3 max-w-sm text-center info-text">{feedBack}</p>
        </div>
    );
};

export default ReviewCard;