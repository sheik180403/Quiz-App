import logo from "../../Img/quiz-logo.png";

function Header() {
  return (
    <>
      <header className="flex flex-col mt-5 justify-center items-center">
        <img src={logo} className="h-14 w-14" />
        <h1 className="mt-2 tracking-[8px] font-moni text-[30px] font-bold bg-myColor bg-clip-text text-transparent">
          REACT QUIZ
        </h1>
      </header>
    </>
  );
}

export default Header;
