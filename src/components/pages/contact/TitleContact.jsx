import useTheme from '../../../constants/useTheme';

const TitleContact = () => {
  const { theme } = useTheme();
  return (
    <div className=' xl:h-[250px] h-[180px]'style={{ background: theme.background }}>
      <div className="mx-auto w-auto pt-14 px-6 flex justify-items-start xl:justify-left xl:pl-[100px] xl:pt-0 xl:h-[120px] xl:items-center">
        <div className="relative">
          <div
            style={{ color: theme.primary, opacity: 0.2}}
            className="absolute pl-8 pt-5 font-abc2 text-[50px] xl:text-[100px] xl:pl-10 font-black"
          >
            Contáctanos
          </div>
          <div
            style={{ color: theme.primary }}
            className="absolute pt-14 font-abc2 text-[40px] xl:pt-20 xl:text-[70px] font-black"
          >
            Contáctanos
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleContact