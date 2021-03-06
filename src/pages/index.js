import React from "react";
import Link from "gatsby-link";
import {UndrawArtLover} from 'react-undraw-illustrations';

const IndexPage = () => (
  <div>
    <UndrawArtLover
    primaryColor='#303030'
    height= '250px'
    className="block mx-auto w-1/2"
    />
    <h2 className="unicase bg-grey-light my-8 p-3">
      under construction
    </h2>
    <p>
     <a href="https://developers.google.com/maps/documentation/javascript/v2tov3" alt="Upgrading Your Maps JavaScript API Application from V2 to V3" className="text-indigo hover:text-grey no-underline">Upgrading Your Maps JavaScript API Application from V2 to V3</a><br/>
     <a href="https://www.silkstream.net/blog/2017/11/pros-cons-lets-encrypt-free-ssl-certificate.html" alt="Pros & Cons of Let's Encrypt Free SSL Certificate" className="text-indigo hover:text-grey no-underline">Pros & Cons of Let's Encrypt Free SSL Certificate </a><br/>
     <a href="https://dev.to/booyaa/lets-encrypt-certificate-renewal-without-downtime-1njp" alt="Let's Encrypt certificate renewal without downtime" className="text-indigo hover:text-grey no-underline">Let's Encrypt certificate renewal without downtime </a><br/>
     <h3 className="unicase bg-grey-light my-8 p-3">
      or you can hire me to modernize applications (re-develop refactor existing apps) to help me earn components to build a skyscraper
    </h3>
    </p>
  </div>
);

export default IndexPage;
