'use client';

import "./index.css";
import Avatar from '../public/Avatar.jpg';
import { IconHome, IconUser, IconMail, IconClock, IconBrandInstagram, IconBrandTwitter, IconBrandFacebook } from '@tabler/icons-react';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


/**--------PARAMETERS TO ADJUST-----------*/

const avatar = Avatar.src;

const name = "Alex Thummalapalli";

const description = "Computer science student at Georgia Tech. Currently learning frontend development in React and user interface design in Figma.";

const links = [
  { name: 'Home', href: 'https://google.com', Icon: IconHome },
  { name: 'About', href: 'https://google.com', Icon: IconUser },
  { name: 'Contact', href: 'https://google.com', Icon: IconMail },
  { name: 'Button', href: 'https://google.com', Icon: IconClock },
];

const displayIcons = true;

const socialIcons = [
  { name: 'Instagram', href: "https://www.instagram.com/", icon: IconBrandInstagram },
  { name: 'Twitter', href: "https://twitter.com/", icon: IconBrandTwitter },
  { name: 'Facebook', href: "https://www.facebook.com/", icon: IconBrandFacebook },
];

/**--------------------------------------*/

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const renderIcon = (link: any) => {
    if (link.Icon) {
      const IconComponent = link.Icon;
      return <IconComponent className="icon" />;
    } else if (link.img) {
      return <img src={link.img} alt="" className="icon" />;
    }
    return null;
  };

  return (
    <main>
      <div className="overlay" />
      <div className="spotlight" />

      <div className="container">

        <img src={avatar} alt="Avatar" className="avatar" id="avatar" />
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>

        <div className="socials">
          {displayIcons && socialIcons.map((social, index) => (
            <a key={index} href={social.href} className="button social" target="_blank" rel="noopener noreferrer">
              <social.icon />
            </a>
          ))}
        </div>

        <div className="links">
          {links.map((link, index) => (
            <div key={index}  data-aos="fade-up" data-aos-easing="ease-sine" data-aos-anchor-placement="center-bottom" data-aos-once="true"  data-aos-delay={index * 50} data-aos-anchor={"#avatar"}>
              <a href={link.href} className="button link" target="_blank" rel="noopener noreferrer">
                {renderIcon(link)}
                <span className="link-text">{link.name}</span>
              </a>
            </div>
          ))}
        </div>

        <p className="footer">
          <a className="footerLink" href="https://github.com/AlexT101/link-in-bio" target="_blank" rel="noopener noreferrer">Link in Bio</a> | {name}
        </p>
      </div>
    </main>
  );
}
