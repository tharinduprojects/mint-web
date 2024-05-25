import Link from "next/link";

const Button = ({ cta }) => {

  return (
    <Link href={cta.link} className='px-6 py-3 bg-btnPrimary'>
      {cta.title}
    </Link>
  );
}

export default Button;
