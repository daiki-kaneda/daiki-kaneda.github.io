import {createHashRouter} from 'react-router-dom';
import Root from '../ui/Root';
import Contact from '../ui/pages/Contact';
import ErrorPage from '../ui/ErrorPage';
import PiyoMath from '../ui/pages/PiyoMath';
import MidnightBright from '../ui/pages/MidnightBright';
import TTS from '../ui/pages/TTS';




const appPages = [
  { path: "contact/", element: <Contact /> },
  { path: "piyo_math/", element: <PiyoMath /> },
  // { path: "cat_classifier/", element: <CatClassifier /> },
  { path: "midnight_bright/", element: <MidnightBright /> },
  // { path: "face_mask/", element: <FaceMask /> },
  //{ path: "bit_math/", element: <BitMath /> },
  { path: "tts/", element: <TTS /> },
  // { path: "my_flavor/", element: <MyFlavor /> },
  // { path: "my_dict/", element: <MyDict /> },
];
const router = createHashRouter([
    {
      path: "/",
      element: <Root />,
      errorElement:<ErrorPage />,
      children:[
           { index: true, element: <PiyoMath />},
            ...appPages
      ]
    },
  ]);

export default router;