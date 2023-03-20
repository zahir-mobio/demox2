import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const EKYCIntroductionStepThree = React.lazy(() =>
  import("pages/EKYCIntroductionStepThree")
);
const EKYCScanIDCard = React.lazy(() => import("pages/EKYCScanIDCard"));
const EKYCBegin = React.lazy(() => import("pages/EKYCBegin"));
const DashboardTwo = React.lazy(() => import("pages/DashboardTwo"));
const CalenderWeek = React.lazy(() => import("pages/CalenderWeek"));
const Tracktasks = React.lazy(() => import("pages/Tracktasks"));
const Profile = React.lazy(() => import("pages/Profile"));
const ShopReviews = React.lazy(() => import("pages/ShopReviews"));
const EKYCScanIDCardAddimage = React.lazy(() =>
  import("pages/EKYCScanIDCardAddimage")
);
const CartProductList = React.lazy(() => import("pages/CartProductList"));
const AddProduct = React.lazy(() => import("pages/AddProduct"));
const CalenderDay1Event = React.lazy(() => import("pages/CalenderDay1Event"));
const Customer = React.lazy(() => import("pages/Customer"));
const SigninDefault = React.lazy(() => import("pages/SigninDefault"));
const DashboardOne = React.lazy(() => import("pages/DashboardOne"));
const EKYCSignature = React.lazy(() => import("pages/EKYCSignature"));
const ShippingInfo = React.lazy(() => import("pages/ShippingInfo"));
const Settings = React.lazy(() => import("pages/Settings"));
const EKYCScanFace = React.lazy(() => import("pages/EKYCScanFace"));
const PaymentInfo = React.lazy(() => import("pages/PaymentInfo"));
const Checkoutinprocess = React.lazy(() => import("pages/Checkoutinprocess"));
const EKYCIntroductionStepTwo = React.lazy(() =>
  import("pages/EKYCIntroductionStepTwo")
);
const ShopSearch = React.lazy(() => import("pages/ShopSearch"));
const CalenderDayNoevent = React.lazy(() => import("pages/CalenderDayNoevent"));
const CalenderMonth = React.lazy(() => import("pages/CalenderMonth"));
const Conversation = React.lazy(() => import("pages/Conversation"));
const EKYCIntroductionStepOne = React.lazy(() =>
  import("pages/EKYCIntroductionStepOne")
);
const EKYCConfirmInformation = React.lazy(() =>
  import("pages/EKYCConfirmInformation")
);
const EKYCIntroductionStepFour = React.lazy(() =>
  import("pages/EKYCIntroductionStepFour")
);
const DashboardThree = React.lazy(() => import("pages/DashboardThree"));
const EKYCSuccessful = React.lazy(() => import("pages/EKYCSuccessful"));
const FileManagementDefault = React.lazy(() =>
  import("pages/FileManagementDefault")
);
const CheckoutSuccessful = React.lazy(() => import("pages/CheckoutSuccessful"));
const ShopDetailitem = React.lazy(() => import("pages/ShopDetailitem"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/shopdetailitem" element={<ShopDetailitem />} />
          <Route path="/checkoutsuccessful" element={<CheckoutSuccessful />} />
          <Route
            path="/filemanagementdefault"
            element={<FileManagementDefault />}
          />
          <Route path="/ekycsuccessful" element={<EKYCSuccessful />} />
          <Route path="/dashboardthree" element={<DashboardThree />} />
          <Route
            path="/ekycintroductionstepfour"
            element={<EKYCIntroductionStepFour />}
          />
          <Route
            path="/ekycconfirminformation"
            element={<EKYCConfirmInformation />}
          />
          <Route
            path="/ekycintroductionstepone"
            element={<EKYCIntroductionStepOne />}
          />
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/calendermonth" element={<CalenderMonth />} />
          <Route path="/calenderdaynoevent" element={<CalenderDayNoevent />} />
          <Route path="/shopsearch" element={<ShopSearch />} />
          <Route
            path="/ekycintroductionsteptwo"
            element={<EKYCIntroductionStepTwo />}
          />
          <Route path="/checkoutinprocess" element={<Checkoutinprocess />} />
          <Route path="/paymentinfo" element={<PaymentInfo />} />
          <Route path="/ekycscanface" element={<EKYCScanFace />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/shippinginfo" element={<ShippingInfo />} />
          <Route path="/ekycsignature" element={<EKYCSignature />} />
          <Route path="/dashboardone" element={<DashboardOne />} />
          <Route path="/signindefault" element={<SigninDefault />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/calenderday1event" element={<CalenderDay1Event />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/cartproductlist" element={<CartProductList />} />
          <Route
            path="/ekycscanidcardaddimage"
            element={<EKYCScanIDCardAddimage />}
          />
          <Route path="/shopreviews" element={<ShopReviews />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tracktasks" element={<Tracktasks />} />
          <Route path="/calenderweek" element={<CalenderWeek />} />
          <Route path="/dashboardtwo" element={<DashboardTwo />} />
          <Route path="/ekycbegin" element={<EKYCBegin />} />
          <Route path="/ekycscanidcard" element={<EKYCScanIDCard />} />
          <Route
            path="/ekycintroductionstepthree"
            element={<EKYCIntroductionStepThree />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
