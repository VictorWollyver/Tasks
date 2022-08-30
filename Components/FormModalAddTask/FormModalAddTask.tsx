import React from "react";
import { useFormik, FormikHelpers } from "formik";
import InputAddTask from "../InputAddTask/InputAddTask";
import FormModalAddTaskStyles from "./FormModalAddTask.styled";

interface Values {
  title: string;
  createdAt: Date;
  description: string;
}

const validate = (values: Values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length < 3) {
    errors.title = "Ivalid name! The name must be greater than 3";
  }

  if (!values.description) {
    errors.description = "Required";
  } else if (values.description.length < 3) {
    errors.description = "Invalid email address";
  }

  return errors;
};

interface FormModalAddTaskProps {
  setModal: Function,
  activeModalAlert: Function,
  setTasks: Function
}

const FormModalAddTask = ({ setModal, activeModalAlert, setTasks }: FormModalAddTaskProps) => {

  const formik = useFormik({
    initialValues: {
      title: "",
      createdAt: new Date(),
      description: "",
    },
    validate,
    onSubmit: (values: Values) => {
      activeModalAlert()
      setModal(false);
      async function postTask() {
       const response = await fetch('http://localhost:3000/tasks/post', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values)
        })
        const json = await response.json()
        setTasks(json)
      }
      postTask()
    },
  })

  return (
    <FormModalAddTaskStyles onSubmit={formik.handleSubmit}>
      <InputAddTask
        type="text"
        label="Task Name"
        messageError={formik.errors.title}
        id="title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />

      <InputAddTask
        type="text"
        label="Description"
        messageError={formik.errors.description}
        id="description"
        onChange={formik.handleChange}
        value={formik.values.description}
      />

      <button type="submit">ADD TASK</button>
    </FormModalAddTaskStyles>
  );

}

export default FormModalAddTask;

