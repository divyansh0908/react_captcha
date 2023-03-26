import logo from './logo.svg';
import './App.css';
import { SignUpForm } from './component/SignUpForm';
import { Helmet } from 'react-helmet';

function App() {
  const description = "This is a react form for signing up with captcha feature"
  const title = "Signup Form"
  const image = "https://react-captcha.netlify.app/logo.jpg"
  const url = "https://react-captcha.netlify.app/"
  const type = "website"

  return (
    <div
      className="bg-red"
    >
   <Helmet>
{ /* Standard metadata tags */ }
<title>{title}</title>
<meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="title" content={title}property="title" />
        <meta name="type" content="website" property="type" />
        <meta name="url" content={url} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} property="description"/>
{ /* End standard metadata tags */ }
{ /* Facebook tags */ }
<meta property="og:site_name" content={title}></meta>
<meta name="type" property="og:type" content={type} />
<meta property="og:title" content="Signup Form"></meta>
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />
<meta property="og:type" content="website" />

<meta property="og:image:width" content="480"/>
<meta property="og:image:height" content="360"></meta>
<meta property="og:url" content={url} />
{ /* End Facebook tags */ }
{ /* Twitter tags */ }
<meta name="twitter:creator" content={"Signup"} />
<meta name="twitter:card" content={type} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={image} />
<meta name="twitter:url" content={url} />

{ /* End Twitter tags */ }
</Helmet>
      
    <SignUpForm />
  
    </div>
  );
}

export default App;
