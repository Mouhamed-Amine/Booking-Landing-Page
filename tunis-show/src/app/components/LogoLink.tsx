import Image from 'next/image';
function LogoLink() {
  return (
    <div className=" text-center ml-2 mt-2">
        <Image src="/images/logo-bookmark.svg" alt='Logo' width={150} height={150}></Image>
    </div>
  );
}

export default LogoLink;