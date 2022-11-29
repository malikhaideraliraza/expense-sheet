import React from 'react';
import { useDispatch } from 'react-redux'

import { setExpensesList } from '../duck/expense/Actions';

const AddExpenseForm = () => {

    const categories = [
        "shopping",
        "holiday",
        "car service"
    ]

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
	}

	return (
		<form onSubmit={handleSubmit} >
			<div className='row'>
				<div className='col-sm'>
					<label htmlFor='category'>Category</label>
                    <input type="text" className='form-control' name="category" list="categoryName"/>
                    <datalist id="categoryName">
                        {
                            categories.map(name => <option key={name} value={name}>{name}</option>)
                        }
                    </datalist>
				</div>
				<div className='col-sm'>
					<label htmlFor='cost'>Cost</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='cost'
					></input>
				</div>

			</div>
            <div className='row'>
            	<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-3'>
						Save
					</button>
				</div>
            </div>
		</form>
	);
};

export default AddExpenseForm;
