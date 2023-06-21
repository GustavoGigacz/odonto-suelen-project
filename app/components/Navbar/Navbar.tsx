export default function Navbar() {
  return (
    <nav className='w-full fixed top-0'>
      <ul className='flex max-w-desktop mx-auto text-font1 text-2xl'>
        <li className='px-8 py-6 border-b-4 border-b-transparent hover:bg-foreground2 hover:border-b-4 hover:border-y-foreground transition-all'>
          Home
        </li>
        <li className='px-8 py-6 border-b-4 border-b-transparent hover:bg-foreground2 hover:border-b-4 hover:border-y-foreground transition-all'>
          Depoimentos
        </li>
        <li className='px-8 py-6 border-b-4 border-b-transparent hover:bg-foreground2 hover:border-b-4 hover:border-y-foreground transition-all'>
          Serviços
        </li>
        <li className='px-8 py-6 border-b-4 border-b-transparent hover:bg-foreground2 hover:border-b-4 hover:border-y-foreground transition-all'>
          Localização
        </li>
        <li className='px-8 py-6 border-b-4 border-b-transparent hover:bg-foreground2 hover:border-b-4 hover:border-y-foreground transition-all'>
          Contato
        </li>
      </ul>
    </nav>
  );
}
