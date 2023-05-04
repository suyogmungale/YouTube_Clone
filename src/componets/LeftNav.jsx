import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'

import LeftNavMenuItem from './LeftNavMenu'
import {categories} from '../utils/constants'
import { Context } from '../context/ContextApi'

const LeftNav = () => {
  const {selectedCategory, setSelectedCategory, mobileMenu} = useContext(Context);

  const clickHandle = (name , type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name)
        
        case "home":
          return setSelectedCategory(name)  
        
        case "menu":  
        break;
    
      default:
        break;
    }
  }
  return (
    <div className="md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transiton-all ">
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return(
            <React.Fragment>
              <LeftNavMenuItem
              text={item.type === "home" ? "Home" : item.name}
              icon ={item.icon}
              action={() =>{
                clickHandle(item.name, item.type)
              }}
              className={`${selectedCategory === item.name ?  "bg-white/[0.15]" : "" }`}
              />
              {item.divider && (
                <hr className="my-5 border-white/[0.2]" />
              )}
            </React.Fragment>
          )
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
          Clone By: Suyog Mungale
        </div>
      </div>
    </div>
  )
}

export default LeftNav