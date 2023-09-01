import Button from "../components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {shoe8} from "../assets/images/index.js";

const SuperQuality = () => {
    return (
        <section
            id="about-us"
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
        >
            <div className="flex flex-1 flex-col">

                <h2 className="font-palanquin text-4xl max-sm:text-3xl capitalize font-bold lg:max-w-lg">
                    We Provide You<span className="text-coral-red">&nbsp;Super&nbsp;</span>
                    <br />
                    <span className="text-coral-red">Quality&nbsp;</span>Shoes

                </h2>
                <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    alias corporis dicta error facilis incidunt ipsum libero, maiores natus odit quis recusandae,
                    explicabo.</p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet dolorem doloremque inventore,
                    molestiae nam?
                </p>
                <div className="mt-11">
                    <Button label="View details"/>
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <img
                    src={shoe8}
                    alt="shoe8"
                    width={570}
                    height={522}
                    className="object-contain"
                />
            </div>
        </section>
    );
};

export default SuperQuality;