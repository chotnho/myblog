import React, { useState }  from 'react'
import logo from "../assets/logo.svg"
import Home from "../assets/home-solid.svg"
import Team from "../assets/social.svg"
import Project from "../assets/starred.svg"
import Doccument from "../assets/draft.svg"
import PowerOff from "../assets/power-off-solid.svg"
import styled from "styled-components";

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after{
      content:" ";
      background-color: var(--white);
      height: 2px;
      width: 1rem;
      position: absolute;
  }
  &::before{
      top: 1 rem;
      transform:${props => props.clicked? "rotate(135deg)" : "rotate(0)"};
  }
 &::after{
     top: 1.5rem;
     transform:${props => props.clicked ? "rotate(-135deg)" : "rotate(0)"}
 }
`;

const Sidebar = () => {


    const [Click, setClick] = useState(false);
    const handleClick = () => setClick(!Click);
  return (
      <>
          <Button clicked={Click} onClick={() => handleClick()}>
              Click
          </Button>
          <div>
              <div>
                  <img src={logo} alt="logo"/>
              </div>
              <ul>
                  <li>
                      <img src="" alt="" />
                      <span>Home</span>
                  </li>
              </ul>
              <ul>
                  <li>
                      <img src="Team" alt="Team" />
                      <span>Sticker</span>
                  </li>
              </ul>
              <ul>
                  <li>
                      <img src="Project" alt="Project" />
                      <span>Project</span>
                  </li>
              </ul>
              <ul>
                  <li>
                      <img src="Doccument" alt="Doccument" />
                      <span>Doccument</span>
                  </li>
              </ul>
              <div>
                  <img src="https://picsum.photos/seed/picsum/200/300" alt="profile" />
                  <div>
                      <div>
                          <h4>Thiên Di</h4>
                          <a href="/#">View profile</a>
                      </div>

                      <button>
                          <img src={PowerOff} alt="logout"/>
                      </button>
                  </div>
            </div>



          </div>
          
      </>
  )
}

export default Sidebar