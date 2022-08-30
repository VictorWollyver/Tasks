import React from 'react'
import { useFormik } from 'formik';
import { type } from 'os';

type ValuesLogin = {
  email: string;
  senha: string;
}

const useFormikHook = ( values: ValuesLogin ) => {
  const formik = useFormik({
     initialValues: {
       ...values
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   return formik
}

export default useFormikHook