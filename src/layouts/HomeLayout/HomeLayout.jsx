import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const HomeLayout = () => {
  const [loading, isLoading] = useState(false);
  const navigation = useNavigation();
  const [isTransparent, setIsTransparent] = useState(false);

  //   const [menu, setMenu] = useState(false);
  //   const toggleMenu = () => {
  //     setMenu(!menu);
  //   };

  useEffect(() => {
    if (loading || navigation.state === "loading") {
      return <p>Loading....</p>;
    }
  }, [loading, navigation.state]);

  return (
    <div>
      <Navbar
        isTransparent={isTransparent}
        setIsTransparent={setIsTransparent}
      />

      {/* {!menu && (
        <div
          className="absolute p-1 lg:hidden z-30  left-8 -mt-12"
          onClick={toggleMenu}
        >
          <FaBars className="text-black text-3xl" />
        </div>
      )}

      {menu && (
        <div className={` fixed  top-0 lg:hidden  z-20 `}>
          <Aside onClick={toggleMenu} />
        </div>
      )}

      {menu && (
        <div
          className="bg-black fixed inset-0 opacity-50 z-10"
          onClick={toggleMenu}
        />
      )} */}

      {/* <div className={menu ? "overflow-hidden h-screen" : ""}> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
