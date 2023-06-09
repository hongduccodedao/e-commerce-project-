import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import path from "./ultils/path";
import {
  Blog,
  DetailProduct,
  FAQ,
  FinalRegister,
  Home,
  Login,
  Products,
  Public,
  ResetPassword,
  Services,
} from "./pages/public";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "./store/app/asyncActions";
import {Modal} from "./components";
import {AdminLayout, CreateProduct, Dashboard, ManageOrder, ManageProducts, ManageUsers} from "./pages/admin";
import {MemberLayout, Personal} from "./pages/member";

const App = () => {
  const dispatch = useDispatch();
  const { isShowModal, modalChildren } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="min-h-screen relative">
      {isShowModal && (
        <Modal>
          {modalChildren}
        </Modal>
      )}
      <Routes>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.FINAL_REGISTER} element={<FinalRegister />} />
        <Route path={path.RESET_PASSWORD} element={<ResetPassword />} />
        <Route path={path.ALL} element={<Home />} />
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.PRODUCTS} element={<Products />} />
          <Route path={path.BLOGS} element={<Blog />} />
          <Route path={path.FAQ} element={<FAQ />} />
          <Route path={path.OUR_SERVICES} element={<Services />} />
          <Route
            path={path.DETAIL_PRODUCT__CATEGORY__PID__TITLE}
            element={<DetailProduct />}
          />
        </Route>
        <Route path={path.ADMIN} element={<AdminLayout />}>
          <Route path={path.DASHBOARD} element={<Dashboard />} />
          <Route path={path.MANAGE_ORDER} element={<ManageOrder />} />
          <Route path={path.MANAGE_USER} element={<ManageUsers />} />
          <Route path={path.MANAGE_PRODUCT} element={<ManageProducts />} />
          <Route path={path.CREATE_PRODUCT} element={<CreateProduct />} />
        </Route>
        <Route path={path.MEMBER} element={<MemberLayout />}>
          <Route path={path.PERSONAL} element={<Personal />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
