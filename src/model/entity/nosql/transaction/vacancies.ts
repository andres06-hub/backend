///////////////////////////////////////////////////////////////
//IMPORTAMOS MODELO
import VacancyModel from '../Company/vacancy';
///////////////////////////////////////////////////////////////
//IMPORTAMOS INTERFACES
import { DataVacancy, Vacancy } from '../../../../interface/Company/data';
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////

//Crear vacante
export const createVacancy = async (values:DataVacancy) => {
	//
	console.log('Creando vacante...');
	//Centinela
	let resultVacancy = null ;
	try {
		//Creamos vacante
		const vacancy = new  VacancyModel({
			...values
		});
		//Guardamos vacante
		await vacancy.save();
		console.log('Result vacancy: ', vacancy);
		resultVacancy = vacancy;
	}catch (error) {
		console.log('ERROR en la creacion de vacante: ',error);
		return false;
	}
	//Retornamos
	return resultVacancy;
};

//?UPDATE VACANCY
export const updateVacancie = async (objectId:string, values:Vacancy) => {
	try {
		const responseUpdate = await VacancyModel.findByIdAndUpdate({_id:objectId},{
			...values
		});
		return responseUpdate;
	} catch (error) {
		console.error('Error: on update vacancy: ',error);
		return false;
	}
	
};
//Mostrar todas las vacantes
export const getVacancies = async () => {
	try {
		const allVacancies = await VacancyModel.find();
		return allVacancies;
	} catch (error) {
		console.error('ERROR en obtener las vacantes: ',error);
		return false;
	}
};

//Buscar una vacante
export const getVacancyObjectId = async (objectId:string) => {
	try {
		const vacancy = await VacancyModel.findOne({_id:objectId}); 
		console.log(vacancy);
	} catch (error) {
		console.error('ERROR actualizamdo vacante',error);
	}
	//ALL OK
	return true;
};
//Eliminamos una vacante por ObjectId
export const delVacancyObjectId = async (objectId:string):Promise<boolean> => {
	try{
		const result = await VacancyModel.findByIdAndDelete({_id:objectId});
		console.log('Delete result: ',result);
	}catch(error){
		console.error('ERROR eliminando vacante',error);
		return false;
	}
	//ALL OK
	return true;
};

