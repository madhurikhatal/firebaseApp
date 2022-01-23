import React from "react";

import Header from './../components/Header'

const MainLayout = (props: any) => {
  return( 
    <div>
        <Header />
    
    <div className="main">
        {props.children}
    </div>
    </div>
    );
};

export default MainLayout;
