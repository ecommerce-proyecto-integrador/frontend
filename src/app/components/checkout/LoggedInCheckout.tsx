'use client';
import React, { useState, useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from "next/navigation";
import  Heading  from '../product/Heading';
import Input from '../input/Input';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Button from '../Button';
import Link from 'next/link';
import { setCookie } from 'cookies-next';
import { useQuery } from '@apollo/client';
import client from '../../apolloClient';
import { useCart } from '../../../../hooks/useCart';
import { on } from 'events';

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

function generarNumeroOrdenCompra(): string {
  const fechaActual = new Date();
  const year = fechaActual.getFullYear().toString().slice(2);
  const month = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
  const day = fechaActual.getDate().toString().padStart(2, '0');

  const numeroAleatorio = Math.floor(Math.random() * 10000).toString().padStart(4, '0');

  const numeroOrdenCompra = `OC${year}${month}${day}${numeroAleatorio}`;

  return numeroOrdenCompra;
}

function generarSessionId(): number {
  const fechaActual = new Date();
  const timestamp = fechaActual.getTime().toString();
  const aleatorio = Math.floor(Math.random() * 10000).toString().padStart(4, '0');

  const sessionId = parseInt(`1${timestamp}${aleatorio}`); // Agregamos "1" al principio para asegurar que empiece con un número diferente de cero.

  return sessionId;
}

const LoggedInCheckoutForm: React.FC = () => {
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
  const {cartProducts, handleClearCart, cartTotalAmount} = useCart();
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [comunas, setComunas] = useState<string[]>([]);

  const { register, formState: {errors}, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      region: '',
      comuna: '',
      address: '',
      floorOrDepartment: '',
    },
  });

  const showInfo_q = gql`
    query showInfo {
      showInfo
      }`;

    const { loading, error, data } = useQuery(showInfo_q, {client: client});

    useEffect(() => {
      if (!loading && !error && data) {
        console.log("Data", data.showInfo);
        const json = JSON.parse(data.showInfo);
        setName(json.nombre);
        setEmail(json.correo);
        setRut(json.rut);
        setPhone(json.phone);
      }
    }, [loading, error, data]);

  const handleRegionChange = (value: string) => {
    setRegion(value); // Actualiza el estado de la región
  };

  const handleComunaChange = (value: string) => {
    setComuna(value); // Actualiza el estado de la comuna
  };

  const handleAddressChange = (value: string) => {
    setAddress(value); // Actualiza el estado de la dirección
  };

  const handleFloorOrDepartmentChange = (value: string) => {
    setFloorOrDepartment(value); // Actualiza el estado del piso o departamento
  };

  const create_pay = gql`
    mutation paycreated($createPayInputnput: CreatePayInput!) {
      paycreated(createPayInputnput: $createPayInputnput)
      }`;
console.log(cartProducts?.map(product => product.id))
  const [createPay] = useMutation(create_pay, {client: client});
  const handlePayment = async () => {
    try {
      const { data } = await createPay({
        variables: {
          createPayInputnput: {
            orden_compra: generarNumeroOrdenCompra(),
            session_id: generarSessionId(),
            monto: cartTotalAmount,
            return_url: "http://localhost:3001/pages/payment",
            cart: cartProducts?.map(product => product.id.toString()) || [],
          },
        },
      });
      const url = data.paycreated;
      router.push(url);
    }
    catch (error) {
      console.error('Error al crear el pago:', error);
      setLoginError('Error al crear el pago. Inténtalo de nuevo.');
    }
    
  }

  useEffect(() => {
    setComunas(regionsAndComunas[selectedRegion] || []);
  }, [selectedRegion]);

    return (
      <>
      <Heading title='Checkout' />
      <hr className='bg-slate-300 w-full h-px'/>
      <div className='flex-row justify-center'>
        <h2 className='text-xl font-bold'>Personal Information</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
      <div className='flex-row justify-center'>
        <h2 className='text-xl font-bold'>Personal Information</h2>
        <p>Phone: {phone}</p>
        <p>Rut: {rut}</p>
      </div>
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
      <Input id='floorOrDepartment' label='Floor or Department' disabled={isLoading} register={register} errors={errors} required onChange={handleFloorOrDepartmentChange}/>
      <hr className='bg-slate-300 w-full h-px'/>

      <Button label='Payment' onClick={handleSubmit(handlePayment)} disabled={isLoading}/>

    </>
    );
  }
  
  export default LoggedInCheckoutForm;