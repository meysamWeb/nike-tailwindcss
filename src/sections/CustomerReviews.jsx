import {reviews} from "../constants";
import ReviewCard from "../components/ReviewCard.jsx";

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin text-center text-4xl max-sm:text-[26px] font-bold">
                What Our
                <span className="text-coral-red">&nbsp;Customers&nbsp;</span>
                Say?
            </h3>
            <p className="info-text m-auto mt-4 max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experiences whit us.</p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.customerName}
                        imgURL={review.imgURL}
                        customerName={review.customerName}
                        rating={review.rating}
                        feedBack={review.feedback}
                    />
                ))}
            </div>
        </section>
    );
};

export default CustomerReviews;