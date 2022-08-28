import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import { useRecoilState } from "recoil";

import ButtonField from "../../components/ButtonField";
import { SignPagesWrapper } from "../../styles";

import Apis from "../../apis";
import SignBox from "../../components/SignBox";
import InputField from "../../components/InputField";

import { AuthAtom } from "../../state";

export default function Index() {
  const [auth, setAuth] = useRecoilState(AuthAtom);
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      userName: yup.string().min(3, "Username should have 3 characters").required("Please enter userName"),
      password: yup.string().min(6, "Password length should be more than 6").required("Please enter password"),
    }),
    onSubmit(values) {
      axios
        .post(Apis.login, values)
        .then((response) => {
          alert("Signed in successfully");
          setAuth(response.data.data);
          localStorage.setItem("userData", JSON.stringify(response.data.data));
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status >= 400) {
            alert(error.response.data.message);
          } else alert("Something went wrong please check backend api connection");
        });
    },
  });
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
          </table>
        </div>
      </SignBox>
      <div className="submitWrapper">
        <div>
          <ButtonField
            label="Sign In"
            click={(e) => {
              formik.handleSubmit(e);
            }}
          />
        </div>
      </div>
    </SignPagesWrapper>
  );
}
