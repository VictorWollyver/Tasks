import React from "react";
import { useForm } from "react-hook-form";

import { ContainerModal, Modal } from "./ModalAddTasks.styled";

import { TaskContext, TaskContextType } from "../../context/TaskContext";

interface FormModalAddTaskProps {
  setModal: Function,
}

interface FormData {
	name: string;
	description: string
}

const FormModalAddTask = ({ setModal }: FormModalAddTaskProps) => {
	const { register, handleSubmit, formState:{errors}} = useForm<FormData>()
  const { postTask, loading, error } = React.useContext(TaskContext) as TaskContextType

	function closeModal(event: React.MouseEvent) {
		if (event.target == event.currentTarget) {
			setModal(false)
		}
	}
  
  return (
    <ContainerModal onClick={closeModal}>
		<Modal>
			
			<form onSubmit={handleSubmit((data) => {
				postTask(data)
				if(!error) setModal(false)
			})}>

				<div>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" {...register('name', {required: 'Field is required'})} />
					{errors.name? <p className="error">{errors.name.message}</p> : <p></p>}
				</div>

				<div>
					<label htmlFor="description">Description</label>
					<input type="text" id="description" {...register('description', {required: 'Field is required'})} />
					{errors.description ? <p className="error">{errors.description.message}</p> : <p></p>}
				</div>

				{ error && <p className="error">{error.response?.data.message}</p> }

				{ loading? <button type="submit" disabled>Adding task...</button> : <button type="submit">Add Task</button> }

			</form>

		</Modal>
	</ContainerModal>
  );

}

export default FormModalAddTask;

