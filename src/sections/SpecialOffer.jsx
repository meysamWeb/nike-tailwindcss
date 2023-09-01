import {offer} from "../assets/images/index.js";
import Button from "../components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";

const SpecialOffer = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <img
                    src={offer}
                    alt=""
                    width={773}
                    height={687}
                    className="object-contain w-full"
                />
            </div>
            <div className="flex flex-1 flex-col">

                <h2 className="font-palanquin text-4xl max-sm:text-3xl capitalize font-bold lg:max-w-lg">
                    <span className="text-coral-red">Special&nbsp;</span>Offer
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    alias corporis dicta error facilis incidunt ipsum libero, maiores natus odit quis recusandae,
                    explicabo.</p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet dolorem doloremque inventore,
                    molestiae nam?
                </p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label="Shop now" iconURL={arrowRight}/>
                    <Button label="Learn more"
                            backgroundColor="bg-white"
                            borderColor="border-slate-gray"
                            textColor="text-slate-gray"
                    />
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;