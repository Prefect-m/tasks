import React, { useEffect, useState } from "react"
import styles from "./table.module.scss"
import { ReactComponent as ArrowDownIcon } from "./arrow-down.svg"

export const Table = ({ posts }) => {
	const [data, setData] = useState([])
	const [isSorted, setIsSorted] = useState(false)

	useEffect(() => {
		setData(posts)
	}, [posts])

	const sortHandler = () => {
		if (!isSorted) {
			setData(
				[...posts].sort((a, b) => a.title.length - b.title.length).reverse()
			)
			setIsSorted(true)
		} else {
			setData([...posts])
			setIsSorted(false)
		}
	}

	return (
		<div className={styles.wrap}>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>
							id
							<button>
								<ArrowDownIcon />
							</button>
						</th>
						<th>
							Заголовок
							<button>
								<ArrowDownIcon />
							</button>
						</th>
						<th>
							Описание
							<button>
								<ArrowDownIcon />
							</button>
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map((post) => (
						<tr key={post.id}>
							<td>
								<span>{post.id}</span>
							</td>
							<td>
								<p onClick={sortHandler} className={styles.postTilte}>
									{post.title}
								</p>
							</td>
							<td>
								<p>{post.body}</p>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
