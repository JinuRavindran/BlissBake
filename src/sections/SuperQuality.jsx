import { cupcake11 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Tasty </span> Cupcakes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Indulge in our delectable array of specialty cakes and cupcakes,
          meticulously crafted to tantalize your taste buds and elevate any
          occasion. From rich and decadent chocolate creations to light and
          fluffy vanilla delights, each treat is lovingly baked with the finest
          ingredients and adorned with exquisite details.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Whether you&apos;re celebrating a birthday, wedding, or simply satisfying
          your sweet cravings, our irresistible offerings promise to enchant and
          delight with every bite.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={cupcake11}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
