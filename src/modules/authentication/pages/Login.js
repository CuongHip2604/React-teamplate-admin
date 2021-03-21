import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CFormText,
  CFormGroup,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../store";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { showToastr } from "src/shared/plugins/toastr";

const Login = () => {
  const emailIsvalid = "The email is invalid";
  const emailReqiured = "The email is reqiured";
  const passwordReuired = "The password is reqiured";
  const passwordMax = "The password must be less than or equal to 6 characters";

  const schema = yup.object().shape({
    email: yup.string().email(emailIsvalid).required(emailReqiured),
    password: yup.string().max(6, passwordMax).required(passwordReuired),
  });

  const { handleSubmit, control, errors, reset, register } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = async (loginForm) => {
    try {
      const params = {
        ...loginForm,
        identifier: loginForm.email,
      };
      delete params.email;
      const res = await dispatch(login(params));
      unwrapResult(res);
      showToastr("Login Successfully!!", "success");
      reset();
      history.push("/");
    } catch (error) {}
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit(handleLogin)}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <Controller
                      name="email"
                      control={control}
                      render={() => (
                        <CFormGroup className="mb-3">
                          <CInputGroup>
                            <CInputGroupPrepend>
                              <CInputGroupText>
                                <CIcon name="cil-user" />
                              </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput
                              type="text"
                              placeholder="Email"
                              autoComplete="email"
                              name="email"
                              innerRef={register({ required: true })}
                            />
                          </CInputGroup>
                          <CFormText className="text-danger" color="red">
                            {errors.email?.message}
                          </CFormText>
                        </CFormGroup>
                      )}
                    />

                    <Controller
                      name="password"
                      control={control}
                      render={() => (
                        <CFormGroup className="mb-4">
                          <CInputGroup>
                            <CInputGroupPrepend>
                              <CInputGroupText>
                                <CIcon name="cil-lock-locked" />
                              </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput
                              type="password"
                              placeholder="Password"
                              autoComplete="current-password"
                              maxLength="6"
                              name="password"
                              innerRef={register({ required: true })}
                            />
                          </CInputGroup>
                          <CFormText className="text-danger" color="red">
                            {errors.password?.message}
                          </CFormText>
                        </CFormGroup>
                      )}
                    />
                    <CRow>
                      <CCol xs="6">
                        <CButton type="submit" color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
