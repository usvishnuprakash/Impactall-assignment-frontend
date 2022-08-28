import { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import SignBox from "../../components/SignBox";
import InputField from "../../components/InputField";
import { SignPagesWrapper } from "../../styles";
import ButtonField from "../../components/ButtonField";

import Apis from "../../apis";

export default function Index() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      licenseStartDate: "",
      licenseEndDate: "",
    },
    validationSchema: yup.object().shape({
      userName: yup.string().min(3, "Minimum 3 characters required").required("Please enter userName"),
      password: yup.string().min(6, "Password length should be more than 6").required("Please enter password"),
      licenseStartDate: yup.date().required("Please select a Date"),
      licenseEndDate: yup.date().min(yup.ref("licenseStartDate"), "Date must be Larger than licenseStartDate").required("Please select a Date"),
    }),

    onSubmit(values) {
      axios
        .post(Apis.signup, values)
        .then((response) => {
          console.log(response);
          alert("Account Created successfully");
          navigate("/sign_in");
        })
        .catch((error) => {
          console.log(error);
          alert("Something went wrong please check backend api connection");
        });
    },
  });
  const convertDate = (date) => {
    if (!!date === true) {
      const [day, month, year] = new Date(date).toLocaleDateString().split("/");
      return `${year}-${month}-${day}`;
    }
    return "";
  };
  useEffect(() => {
    console.log(formik.errors);
  }, [formik]);
  return (
    <SignPagesWrapper>
      <SignBox>
        <div>
          <table>
            <InputField
              input={{
                type: "text",
                onchange: (e) => {
                  formik.setFieldValue("userName", e);
                },
                error: formik.errors.userName,
                value: formik.values.userName,
              }}
              label="User Name"
            />
            <InputField
              input={{
                type: "text",
                onchange: (e) => {
                  formik.setFieldValue("password", e);
                },
                error: formik.errors.password,
                value: formik.values.password,
              }}
              label="Password"
            />
            <InputField
              input={{
                type: "date",
                onchange: (e) => {
                  if (!!e === true) {
                    formik.setFieldValue("licenseStartDate", new Date(e));
                  }
                },
                error: formik.errors.licenseStartDate,
                value: convertDate(formik.values.licenseStartDate),
              }}
              label="License Start Date"
            />
            <InputField
              input={{
                type: "date",
                onchange: (e) => {
                  if (!!e === true) {
                    formik.setFieldValue("licenseEndDate", new Date(e));
                  }
                },
                error: formik.errors.licenseEndDate,
                value: convertDate(formik.values.licenseEndDate),
              }}
              label="License End Date"
            />
          </table>
        </div>
      </SignBox>
      <div className="submitWrapper">
        <div>
          <ButtonField
            label="Sign Up"
            click={(e) => {
              formik.handleSubmit(e);
            }}
          />
        </div>
      </div>
    </SignPagesWrapper>
  );
}
