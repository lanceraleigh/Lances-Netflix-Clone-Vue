/* eslint-disable */
// import { getInstance } from "./auth0-plugin";

// export const authenticationGuard = (to, from, next) => {
//   const authService = getInstance();

//   const guardAction = () => {
//     if (authService.isAuthenticated) {
//       return next();
//     }

//     authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
//   };

//   authService.$watch("isLoading", (isLoading) => {
//     if (isLoading === false) {
//       // Perform an action
//       return guardAction();
//     }
//   });
// };
