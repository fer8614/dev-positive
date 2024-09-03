import Image from "next/image";

const Avatar2 = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/public/avatar2.png"}
        width={737}
        height={678}
        alt="avatar"
        className="translate-z-0 w-full h-full opacity-85"
      />
    </div>
  );
};

export default Avatar2;
