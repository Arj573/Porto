import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  Logo,
  NavItems,
  MobileMenu,
  MobileLink,
  HamburgerContainer,
} from "./NavbarStyledComponent";
import { useState, useEffect } from "react";
import logo from "../../images/porto_logo.png";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".hamburger-react")) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    const offset = 70; 
    if (section) {
      const rect = section.getBoundingClientRect();
      let top = window.scrollY + rect.top - offset;
      if (id === "#contact" && window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        top = document.body.scrollHeight - window.innerHeight; 
      }
  
      console.log(`Scrolling to ${id}, adjusted top position: ${top}`);
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    } else {
      console.error(`Section with ID ${id} not found!`);
    }
  };
  
  
  

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href="#about">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}  
          >
            <Logo src={logo} /> <Span> My Portofolio</Span>
          </a>
        </NavLogo>
        <HamburgerContainer>
          <Hamburger
            size={20}
            color="white"
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </HamburgerContainer>
        <NavItems>
        <NavLink
  href="#about"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("#about");
  }}
>
  About
</NavLink>
<NavLink
  href="#skills"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("#skills");
  }}
>
  Skills
</NavLink>
<NavLink
  href="#experience"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("#experience");
  }}
>
  Experience
</NavLink>
<NavLink
  href="#projects"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("#projects");
  }}
>
  Projects
</NavLink>
<NavLink
  href="#contact"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("#contact");
  }}
>
  Contact
</NavLink>

        </NavItems>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
          <MobileLink
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#about");
              setIsOpen(false); // Close the mobile menu after clicking
            }}
          >
            About
          </MobileLink>
          <MobileLink
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#skills");
              setIsOpen(false);
            }}
          >
            Skills
          </MobileLink>
          <MobileLink
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#experience");
              setIsOpen(false);
            }}
          >
            Experience
          </MobileLink>
          <MobileLink
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#projects");
              setIsOpen(false);
            }}
          >
            Projects
          </MobileLink>
          <MobileLink
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
              setIsOpen(false);
            }}
          >
            Contact
          </MobileLink>
        </MobileMenu>        
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
