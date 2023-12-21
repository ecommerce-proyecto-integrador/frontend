'use client';
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from "next/navigation";
import  Heading  from '../product/Heading';
import Input from '../input/Input';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Button from '../Button';
import Link from 'next/link';
import { setCookie, getCookie } from 'cookies-next';

type RegionsAndComunasType = {
  [key: string]: string[];
};

const regionsAndComunas: RegionsAndComunasType = {
  "Arica y Parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
  "Tarapacá": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
  "Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
  "Atacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
  "Coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
  "Valparaíso": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"],
  "Metropolitana de Santiago": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"],
  "Libertador General Bernardo O'Higgins": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"],
  "Maule": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
  "Ñuble": ["Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"],
  "Biobío": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"],
  "La Araucanía": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
  "Los Ríos": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
  "Los Lagos": ["Ancud","Castro","Chonchi","Curaco de Veléz","Dalcahue","Puqueldón","Queilén","Quemchi","Quemchi","Quinchao","Calbuco","Cochamó","Frutillar","Llanquihue","Los Muermos","Maullín","Puerto Montt","Puerto Varas","Osorno","Puerto Octay","Purranque","Puyehue","Río Negro","San Juan de la Costa","San Pablo","Chaitén","Futaleufú","Hualaihué","Palena"],
  "Aysén del General Carlos Ibáñez del Campo": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O'Higgins", "Tortel", "Chile Chico", "Río Ibáñez"],
  "Magallanes y de la Antártica Chilena": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"],
};

const NotLoggedInCheckoutForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rut, setRut] = useState('');
  const [region, setRegion] = useState('');
  const [comuna, setComuna] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [floorOrDepartment, setFloorOrDepartment] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const token = getCookie("token");
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [comunas, setComunas] = useState<string[]>([]);
  const { register, formState: {errors}, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      rut: '',
      region: '',
      comuna: '',
      address: '',
      phone: '',
      floorOrDepartment: '',
    },
  });

  const handleEmailChange = (value: string) => {
    setEmail(value); // Actualiza el estado del correo electrónico
  };

  const handleNameChange = (value: string) => {
    setName(value); // Actualiza el estado del nombre
  };

  const handleRutChange = (value: string) => {
    setRut(value); // Actualiza el estado del rut
  };

  const handleRegionChange = (value: string) => {
    setRegion(value); // Actualiza el estado de la región
  };

  const handleComunaChange = (value: string) => {
    setComuna(value); // Actualiza el estado de la comuna
  };

  const handleAddressChange = (value: string) => {
    setAddress(value); // Actualiza el estado de la dirección
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value); // Actualiza el estado del teléfono
  };

  const handleFloorOrDepartmentChange = (value: string) => {
    setFloorOrDepartment(value); // Actualiza el estado del piso o departamento
  };

  const handlePayment = () => {
    router.push('/pages/payment');
  }

    return (
      <>
      <Heading title='Checkout' />
      <hr className='bg-slate-300 w-full h-px'/>
      <Input id='email' label='Email' disabled={isLoading} register={register} errors={errors} required onChange={handleEmailChange}/>
      <Input id='name' label='Name' disabled={isLoading} register={register} errors={errors} required onChange={handleNameChange}/>
      <Input id='rut' label='Rut' disabled={isLoading} register={register} errors={errors} required onChange={handleRutChange}/>
      <select
        className="form-select block w-full mt-1 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
      >
        <option value="">Select a Region</option>
        {Object.keys(regionsAndComunas).map((region) => (
          <option key={region} value={region}>{region}</option>
        ))}
      </select>

      {/* Comuna Dropdown */}
      <select
        className="form-select block w-full mt-1 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
        value={comuna}
        onChange={(e) => setComuna(e.target.value)}
        disabled={!selectedRegion}
      >
        <option value={comunas}>Select a Comuna</option>
        {comunas.map((comuna) => (
          <option key={comuna} value={comuna}>{comuna}</option>
        ))}
      </select>
      <Input id='address' label='Address' disabled={isLoading} register={register} errors={errors} required onChange={handleAddressChange}/>
      <Input id='phone' label='Phone' disabled={isLoading} register={register} errors={errors} required onChange={handlePhoneChange}/>
      <Input id='floorOrDepartment' label='Floor or Department' disabled={isLoading} register={register} errors={errors} required onChange={handleFloorOrDepartmentChange}/>
      <hr className='bg-slate-300 w-full h-px'/>

      <Button label='Payment' onClick={handleSubmit(handlePayment)} disabled={isLoading}/>

    </>
    );
  }
  
  export default NotLoggedInCheckoutForm;