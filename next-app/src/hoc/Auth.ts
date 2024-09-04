// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// export function withAuth(Component: React.ComponentType<any>) {
//   return function AuthenticatedComponent(props: any) {
//     const router = useRouter();
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect(() => {
//       const token = document.cookie.split('; ').find(row => row.startsWith('auth-token='));

//       if (!token) {
//         router.push('/auth');
//       } else {
//         setIsAuthenticated(true);
//       }
//     }, [router]);

//     if (!isAuthenticated) {
//       return null; // Optionally render a loading spinner
//     }

//     return {...props};
//   };
// }