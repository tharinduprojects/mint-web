import Link from "next/link";

const Button = ({ cta, className, ctaAction }) => {
  let btnSize;

  switch (cta?.size) {
    case 'sm':
      btnSize = 'px-5 py-3';
      break;

    case 'lg':
      btnSize = 'px-8 py-4';
      break;

    default:
      btnSize = '';
      break;
  }

  return (
    <>
      {ctaAction ? <button onClick={ctaAction}
        className={`${className} ${btnSize} text-sm bg-btnPrimary rounded-full text-white`}
      >
        {cta?.title}
      </button > : <Link href={cta?.link} className={`${className} ${btnSize} text-sm bg-btnPrimary rounded-full text-white`}>
        {cta?.title}
      </Link>
      }
    </>
  );
};

export default Button;
