import { MySQLDataSource as dsource } from '../../config/datasources';
import { Roles } from '../entity/sql/Rol';

////////////////////////////////
//Guardamos el dato a roles 
export const createRoles = async (email : string , type : number) : Promise<boolean>=> {

	// creamos el rol
	const rol = {
		email : email,
		rol : type
	};
	//tratamos 	
	try {
		console.log(dsource);
		// obtenemos la conexion y creamos el rol
		const newRol = dsource.getRepository(Roles).create(rol);
		// guardamos el nuevo rol
		const results = await dsource.getRepository(Roles).save(newRol);
		console.log('-> Resultados de Rol ::',results);
		return true;
		
	} catch (err) {
		console.log(err);
		return false;
	}
};