import useTheme from '../../../constants/useTheme';

const TitleAboutUs = () => {
  const { theme } = useTheme();
  return (
    <div className=' xl:h-[250px] h-[180px]'style={{ background: theme.background }}>
      <div className="mx-auto w-auto pt-14 px-6 flex justify-items-start xl:justify-left xl:pl-[100px] xl:pt-0 xl:h-[120px] xl:items-center">
        <div className="relative">
          <div
            style={{ color: theme.primary, opacity: 0.2}}
            className="absolute pl-8 pt-5 font-abc2 text-[60px] xl:text-[100px] xl:pl-10 font-black"
          >
            Nosotros
          </div>
          <div
            style={{ color: theme.primary }}
            className="absolute pt-14 font-abc2 text-[50px] xl:pt-20 xl:text-[70px] font-black"
          >
            Nosotros
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleAboutUs