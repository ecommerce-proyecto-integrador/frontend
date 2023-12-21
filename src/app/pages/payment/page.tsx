"use client";
import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import { useSearchParams } from "next/navigation";
import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import client from "../../apolloClient";

const Payment = () => {
  const [message, setMessage] = useState(null);
  const searchParams = useSearchParams();

  const commit_pay = gql`
    mutation commitPay($commitPayInput: commitPayInput!) {
      commitPay(commitPayInput: $commitPayInput)
    }
  `;

  const [commitPay] = useMutation(commit_pay, { client: client });

  const handleCommitPay = async () => {
    try {
      const { data } = await commitPay({
        variables: {
          commitPayInput: {
            token: searchParams.get("token_ws"),
          },
        },
      });
      //console.log("Data", data);
      const json = JSON.parse(data.commitPay);
      console.log(json);
      setMessage(json);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    const search = searchParams.get("token_ws");
    if (search) {
      handleCommitPay();
    }
  }, []);
  const statusStyle =
    message?.status === "AUTHORIZED"
      ? "text-green-600 font-semibold"
      : "text-red-600 font-semibold";

  return (
    <Container>
      
      <FormWrap>
      <h1 className="text-2xl font-semibold text-gray-700">Payment</h1>
      {message?.status === "AUTHORIZED" ? (
        <p className={statusStyle}>Succesfull Transaction</p>
      ) : (
        <p className={statusStyle}>Failed Transaction</p>
      )}
        {message && (
          <div className="bg-white shadow-md rounded-lg p-6 my-4">
            {Object.entries(message).map(([key, value]) => {
              return (
                <div
                  key={key}
                  className="flex justify-between items-center py-1 border-b border-gray-300"
                >
                  <span className="text-gray-700 font-medium">{key}:</span>
                  <span
                    className={key === "status" ? statusStyle : "text-gray-600"}
                  >
                    {key === "card_detail" ? JSON.stringify(value) : value}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </FormWrap>
    </Container>
  );
};

export default Payment;
