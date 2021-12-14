import dynamic from 'next/dynamic';
import Image from 'next/image';

// const DynamicH1 = dynamic(() => import("./DynamicH1"));
// const AuthenticatedPanel = dynamic(() => import("./Authenticated"));
// const NonAuthenticatedPanel = dynamic(() => import("./NonAuthenticated"));
// //in this case thanks dynamic NonAuth will be not download in the bundle

// If you use s3 and not optimaze images, the you waste bandwith
// Your images are heavy / not scaled -> slow for user
// Image is loadeing when is showed (for scrolling example)

//loader could be use in completly static site for compression
function loader({ src, width, quality }) {
  console.log(src, width, quality);

  return `http://my-custom-service-com/?url=${src}`
}

export default function Home(props) {

  return (
    <div>
      {/* This get src from public */}
      <Image src="/image.jpeg" alt="" width={1280} height={780} />
      
      <Image loader={loader} src="/image.jpeg" alt="" width={1280} height={780} /> 
    </div>
  )
}
