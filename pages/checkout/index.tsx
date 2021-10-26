import { useSession } from "next-auth/client";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Steps, Button, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { steps } from "./Steps";

const { Step } = Steps;

const Checkout: React.FC = () => {
  const session = useSession();

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  // finish process wait

  useEffect(() => {
    if (session) {
      setCurrent(1);
    }
  }, [session]);

  useEffect(() => {
    steps.map((step) => {
      if (step.id === current) {
        step.status = "process";
      }
      if (step.id < current) {
        step.status = "finish";
      }
    });
  }, [current]);

  return (
    <section className="px-24 my-6">
      <Steps current={current}>
        {steps.map((step) => {
          const {
            id,
            title,
            status,
            icon,
          }: { id: number; title: string; status: any; icon: any } = step;
          return (
            <Step
              key={id}
              title={title}
              status={status}
              icon={current === id ? <LoadingOutlined /> : icon}
            />
          );
        })}
      </Steps>
      <section className="mt-6">
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
