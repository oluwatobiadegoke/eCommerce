import { UserOutlined, LoadingOutlined } from "@ant-design/icons";
import { FaRegAddressCard } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { BsBagCheck } from "react-icons/bs";

import Auth from "../../components/checkout/Auth/Auth";
import ShippingAddress from "../../components/checkout/ShippingAddress/ShippingAddress";
import PaymentMethod from "../../components/checkout/PaymentMethod/PaymentMethod";
import Order from "../../components/checkout/Order/Order";

export const steps = [
  {
    id: 0,
    title: "Login",
    status: "wait",
    content: <Auth />,
    icon: <UserOutlined />,
  },
  {
    id: 1,
    title: "Shipping Address",
    status: "wait",
    content: <ShippingAddress />,
    icon: <FaRegAddressCard />,
  },
  {
    id: 2,
    title: "Payment Method",
    status: "wait",
    content: <PaymentMethod />,
    icon: <MdPayment />,
  },
  {
    id: 3,
    title: "Order",
    status: "wait",
    content: <Order />,
    icon: <BsBagCheck />,
  },
];
