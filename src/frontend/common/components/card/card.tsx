import Image from 'next/image'
import product1 from "../../../../../public/produto1.png";
import { Button } from '../button/Button';

const Card = ({ ImageSource }: any) => {
  return (
    <div className="flex items-center sm:block relative overflow-hidden bg-light h-[270px] sm:h-[430px] sm:w-[270px] lg:h-[430px] lg:w-[320px] rounded-xl">
      <figure className='relative h-[240px] flex items-center sm:items-start sm:justify-center'>
        <Image
          src={ImageSource}
          width={250}
          height={250}
          alt="Risco"
        />
      </figure>
      <div className='px-6 py-3'>
        <h2 className='text-dark font-bold'>Risco Personalizado</h2>
        <p className='text-sm text-darkGrey mt-4'>A partir de:</p>
        <span className='text-2xl font-bold'>R$ 50.00</span>
        <Button
          className='bg-primary font-bold text-dark w-full mt-5 mx-0 text-base sm:text-lg rounded-lg'
          href={"/drawing"}
          onClick={(e: any) => {
            e.stopPropagation();
          }}
        >
          <span>Comprar</span>
        </Button>
      </div>
    </div>
  );
};

export default Card;
