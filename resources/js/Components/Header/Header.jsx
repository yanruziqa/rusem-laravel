import TopBar from "./Partial/TopBar";
import LogoBar from "./Partial/LogoBar";
import CategoryMenu from "./Partial/CategoryMenu";
import NavBar from "./Partial/NavBar";
import { useState, useEffect, useRef } from 'react';

export default function Header({ categoryList }) {
    const [height, setHeight] = useState(0)
    const ref = useRef(null)
  
    useEffect(() => {
      setHeight(ref.current.clientHeight)
    })
    return (
        <>
            <div style={{display: "block", width: "100%", height: height}}></div>
            <div ref={ref} className="header-section header-sticky">
                <TopBar />
                <div className="header-main">
                    <div className="container">
                        <div className="header-main-wrapper">         
                            <LogoBar />
                            <CategoryMenu categoryList={categoryList}/>
                            <NavBar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
