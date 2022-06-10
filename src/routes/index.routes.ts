//IMPORTAMOS TODAS LAS RUTAS
import { Application, Router } from 'express';
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//IMPORTAMOS RUTAS
import routerLogin from './login.routes';
import routerHome from './home.routes';
import routerRecoverPass from './recoverPass.routes';
import routerResetPass from './reset-pass.routes';
import routerVerifyTokenDecode from './verifyToken.routes';
//COMPANY
import routerCompanySingup from './Company/company-signup.routes';
import routerCompanyProfileConfig from './Company/profile.config.routes';
import routerCompanyProfileChangePass from './Company/changePass.routes';
import routerCompanyCompleteData from './Company/completeData.routes';
import routerCompanyCreateVacancy from './Company/createVacancy.routes';
//GUIDE
import routerGuideSignup from './Guide/guide-signup.routes';
import routerGuideProfileConfig from './Guide/profile.config.routes';
import routerGuideProfileUploadPhoto from './Guide/file.upload.routes';
import routerGuideProfileChangePass from './Guide/chagePass.routes';
import routerGuideCompleteData from './Guide/completeData.routes';
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//Obtenemos las rutas y guardamos en un arreglo
const _routes : [Router][] = [
	[routerLogin],
	[routerHome],
	[routerRecoverPass],
	[routerResetPass],
	[routerVerifyTokenDecode],
	//?COMPANY
	[routerCompanySingup],
	[routerCompanyProfileConfig],
	[routerCompanyProfileChangePass],
	[routerCompanyCompleteData],
	[routerCompanyCreateVacancy],
	//?GUIDE
	[routerGuideSignup],
	[routerGuideProfileConfig],
	[routerGuideProfileUploadPhoto],
	[routerGuideProfileChangePass],
	[routerGuideCompleteData],
] ;

//Pasamos por las rutas 
export const routes = ( app : Application) => {
	_routes.forEach((route) => {
		const [ url ] = route;
		app.use(url);
	});
};