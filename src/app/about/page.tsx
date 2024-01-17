import Image from "next/image";

const About = () => {
  return (
    <div>
      About
      <Image
        alt=" "
        height={500}
        width={500}
        src={
          "https://images.pexels.com/photos/14801450/pexels-photo-14801450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
    </div>
  );
};

export default About;
