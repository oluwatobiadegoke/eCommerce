import { useState } from "react";
import "antd/dist/antd.css";
import { Steps, Button, message } from "antd";
import { UserOutlined, LoadingOutlined } from "@ant-design/icons";
import { FaRegAddressCard } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { BsBagCheck } from "react-icons/bs";

import Auth from "../../components/checkout/Auth/Auth";
import ShippingAddress from "../../components/checkout/ShippingAddress/ShippingAddress";
import PaymentMethod from "../../components/checkout/PaymentMethod/PaymentMethod";
import Order from "../../components/checkout/Order/Order";

const { Step } = Steps;

const Checkout: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Login",
      status: "process",
      content: <Auth />,
      icon: <LoadingOutlined />,
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

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  // finish process wait

  return (
    <section className="px-24">
      <Steps current={current}>
        {steps.map((step) => {
          const {
            id,
            title,
            status,
            icon,
          }: { id: number; title: string; status: any; icon: any } = step;
          return <Step key={id} title={title} status={status} icon={icon} />;
        })}
      </Steps>
      <section>
        {steps[current].content}
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </section>
    </section>
  );
};

export default Checkout;
