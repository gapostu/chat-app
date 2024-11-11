import Image from 'next/image';

type Props = { size?: number };

const LoadingLogo = ({ size = 100 }: Props) => {
  return (
    <div className="h-full v-full flex justify-center items-center">
      <Image
        src="logo.svg"
        width={size}
        height={size}
        alt="Logo"
        className="animate-puls duration-700"
      />
    </div>
  );
};

export default LoadingLogo;
