const ContactInformation = () => {
  return (
    <div className="mx-auto mt-32 px-6 flex flex-col font-abc2 items-center justify-center space-y-5 xl:mt-36 xl:px-36 xl:items-start">
    <p className="text-[20px] text-skyBlue leading-tight">
      Nuestro equipo de abogados tiene un amplio conocimiento en diversas
      áreas del derecho. Estamos comprometidos a brindar a nuestros clientes
      una representación legal de alta calidad.
    </p>
  
    <ul className="text-skyBlue text-[16px] xl:text-[20px]">
      <li>
        <strong className="text-blue">Dirección:</strong> Calle 106 No. 58 - 27 Of 706 Bogotá D.C.
      </li>
      <li><strong className="text-blue">Celular:</strong> 57+ 300 725 72 66 </li>
      <li><strong className="text-blue">Correo Electrónico:</strong> claudia@montes-a.com</li>
    </ul>
  </div>
  );
};

export default ContactInformation;
