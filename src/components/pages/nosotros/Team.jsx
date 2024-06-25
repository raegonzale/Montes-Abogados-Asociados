
import team from "../../../assets/images/aboutUs/team.png"
import { Parallax, } from 'react-parallax';

export const Team = () => {
  return (
    <div>



<Parallax
        blur={{ min: -1, max: 1 }}
        bgImage={team}
        bgImageAlt="background"
        strength={130}
      >
<div className="xl:w-full xl:h-[650px]">
  
</div>

      </Parallax>


    </div>
  )
}
