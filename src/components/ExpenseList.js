import React from 'react'
import ExpenseItem from './ExpenseItem';

import { useSelector} from 'react-redux'

const ExpenseList = () => {
    const expenses = [
		{ id: 12, name: 'shopping', cost: 40 },
		{ id: 13, name: 'holiday', cost: 400 },
		{ id: 14, name: 'car service', cost: 50 },
	];

	const state = useSelector((state) => state);

    return (
		<ul className='list-group text-capitalize'>
			{expenses.map((expense) => (
				<ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
			))}
		</ul>
    )
}

export default ExpenseList