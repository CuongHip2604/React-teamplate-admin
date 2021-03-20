import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
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
import { handleRegister } from "../store";
import { unwrapResult } from "@reduxjs/toolkit";
import { useHistory } from "react-router";

const Register = () => {
  const emailIsvalid = "The email is invalid";
  const emailReqiured = "The email is reqiured";
  const passwordReuired = "The password is reqiured";
  const passwordMax = "The password must be less than or equal to 6 characters";

  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email(emailIsvalid).required(emailReqiured),
    password: yup.string().max(6, passwordMax).required(passwordReuired),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required(passwordReuired),
  });

  const defaultValues = {
    fullName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const { handleSubmit, control, errors, register, reset } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const submitForm = async (registerForm) => {
    try {
      const params = {
        ...registerForm,
        username: registerForm.email,
      };
      delete params.passwordConfirm;
      const res = await dispatch(handleRegister(params));
      unwrapResult(res);
      reset();
      history.push("/login");
    } catch (error) {}
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit(submitForm)}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <Controller
                    name="fullName"
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
                            placeholder="full name"
                            autoComplete="fullName"
                            name="fullName"
                            innerRef={register({ required: true })}
                          />
                        </CInputGroup>
                        <CFormText className="text-danger" color="red">
                          {errors.fullName?.message}
                        </CFormText>
                      </CFormGroup>
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    render={() => (
                      <CFormGroup className="mb-3">
                        <CInputGroup>
                          <CInputGroupPrepend>
                            <CInputGroupText>@</CInputGroupText>
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
                  ></Controller>
                  <Controller
                    name="password"
                    control={control}
                    render={() => (
                      <CFormGroup className="mb-3">
                        <CInputGroup>
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-lock-locked" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput
                            type="password"
                            placeholder="Password"
                            autoComplete="new-password"
                            name="password"
                            maxLength="6"
                            innerRef={register({ required: true })}
                          />
                        </CInputGroup>
                        <CFormText className="text-danger" color="red">
                          {errors.password?.message}
                        </CFormText>
                      </CFormGroup>
                    )}
                  ></Controller>

                  <Controller
                    name="passwordConfirm"
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
                            placeholder="Repeat password"
                            autoComplete="new-password"
                            name="passwordConfirm"
                            maxLength="6"
                            innerRef={register({ required: true })}
                          />
                        </CInputGroup>
                        <CFormText className="text-danger" color="red">
                          {errors.passwordConfirm?.message}
                        </CFormText>
                      </CFormGroup>
                    )}
                  ></Controller>

                  <CButton type="submit" color="success" block>
                    Create Account
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
