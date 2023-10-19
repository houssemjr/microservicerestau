import { environment } from "src/environments/environment";
import { AuthConfig } from "angular-oauth2-oidc";




export const authCodeFlowConfig: AuthConfig = {

    issuer: 'http://localhost:8080/auth/realms/MySSOApplications',

    redirectUri: 'http://localhost:4200/',

    clientId: 'sso-app',
    responseType: 'code',

    scope: 'openid profile',
    

    showDebugInformation: true,
};