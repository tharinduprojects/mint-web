import Link from "next/link";

const Button = ({ cta }) => {


  let btnSIze;

  switch (cta.size) {
    case 'sm':
      btnSIze = 'px-5 py-3'
      break;

    case 'lg':
      btnSIze = 'px-6 py-4'
      break;

    default:
      break;
  }

  return (
    <Link href={cta.link} className={` ${btnSIze} text-sm bg-btnPrimary rounded-full text-white`}>
      {cta.title}
    </Link>
  );
}

export default Button;
