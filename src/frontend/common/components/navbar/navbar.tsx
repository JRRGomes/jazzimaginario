import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <nav className='bg-primary h-14 py-4 flex justify-center'>
      <div className='w-9/12 flex items-center justify-between'>
        <a href='/' className='text-darkGrey self-start'>Logo</a>
        <div className='md:flex hidden'>
          <Link className='px-10' title='Riscos' />
          <Link className='px-10' title='Sobre' />
          <Link className='px-10' title='Contato' />
        </div>
        <ShoppingCartIcon className='text-darkGrey'/>
      </div>
    </nav>
  );
};

const Link = (props: any) => {
  return (
    <a 
      className='text-darkGrey px-10 py-2 hover:text-secondary cursor-pointer'
      href={props.href}
    >
      {props.title}
    </a>
  );
};

export default Navbar;
