import team from "../../../assets/images/aboutUs/team.png";
import { Parallax } from "react-parallax";

export const Team = () => {
  return (
    <div>
      <Parallax
        blur={{ min: -1, max: 1 }}
        bgImage={team}
        bgImageAlt="background"
        strength={150}
        style={{ height: '100vh' }}
        bgImageStyle={{ objectFit: 'cover', objectPosition: 'center' }}
      >
        <div className="h-screen w-full"></div>
      </Parallax>
    </div>
  );
};