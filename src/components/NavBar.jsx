function NavBar() {
  return (
    <div className="bg-verde w-full max-h-14 flex flex-wrap items-center justify-between mx-auto p-2">
      <img
        className="px-3 h-8"
        src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025"
        alt="eht"
      />
      <span className="text-blanco text-xl font-bold h-8 ">
        CryptoCurrencyGF
      </span>
      <a href="https://www.linkedin.com/in/guidofrati/">
        <img
          src="https://www.svgrepo.com/show/314281/linkedin.svg"
          alt="linkedin"
          className="h-10 pr-3"
        />
      </a>
    </div>
  );
}

export default NavBar;
