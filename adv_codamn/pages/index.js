import dynamic from 'next/dynamic';

const DynamicH1 = dynamic(() => import("./DynamicH1"));
const AuthenticatedPanel = dynamic(() => import("./Authenticated"));
const NonAuthenticatedPanel = dynamic(() => import("./NonAuthenticated"));
//in this case thanks dynamic NonAuth will be not download in the bundle

export default function Home(props) {

  return (
    <div>
      {user ? <AuthenticatedPanel /> : <NonAuthenticatedPanel />}
    </div>
  )
}
