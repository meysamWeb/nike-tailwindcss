import Button from "../components/Button.jsx";

const Subscribe = () => {
    return (
        <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
            <h3 className="text-4xl max-sm:text-3xl leading-[68px] lg:max-w-lg font-palanquin font-bold">Sing up for
            <span className="text-coral-red">&nbsp;Update</span> & Newsletter
            </h3>
            <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
                <input type="text" placeholder="subscribe@nike.com" className="input"/>
                <div className="flex max-sm:justify-end items-center max-sm:w-full">
                    <Button label="Sing Up" fullWidth/>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;