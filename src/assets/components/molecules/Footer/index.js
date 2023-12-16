import React from 'react'
import { ICgithub, ICinstagram, ICstackoverflow, m3rn,  } from '../../..'
import './footer.scss'
const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img  className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

const footer = () => {
  return (
    <div>
        <div className="footer">
            <div>
                <img className="logo"src={m3rn} alt="logo" />
                </div>
                <div className="social-wrapper">
                    <Icon img={ICinstagram} />
                    <Icon img={ICgithub} />
                    <Icon img={ICstackoverflow} />
                </div>
            </div>
            <div className="copyright">
                <p>MERN STACK</p>
            </div>

        

    </div>
  )
}

export default footer