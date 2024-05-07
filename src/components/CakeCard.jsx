const CakeCard = ({ imgURL, changeCupCakeImage, bigCupCakeImg }) => {
  const handleClick = () => {
    if (bigCupCakeImg !== imgURL.bigCupCake) {
      changeCupCakeImage(imgURL.bigCupCake);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigCupCakeImg === imgURL.bigCupCake
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src={imgURL.thumbnail}
          alt='cupcake colletion'
          width={500}
          height={103.34}
          className='object-cover'
        />
      </div>
    </div>
  );
};

export default CakeCard;
