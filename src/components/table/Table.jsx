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
		<table className={styles.table}>
			<thead className={styles.tableHead}>
				<tr className={styles.tableRow}>
					<th className={styles.tableTitle}>
						id
						<button>
							<ArrowDownIcon />
						</button>
					</th>
					<th className={styles.tableTitle} onClick={sortHandler}>
						Заголовок
						<button>
							<ArrowDownIcon />
						</button>
					</th>
					<th className={styles.tableTitle}>
						Описание
						<button>
							<ArrowDownIcon />
						</button>
					</th>
				</tr>
			</thead>
			<tbody className={styles.tableBody}>
				{data.map((post) => (
					<tr key={post.id} className={styles.tableBodyRow}>
						<td className={styles.tableBodyCol}>
							<span>{post.id}</span>
						</td>
						<td className={styles.tableBodyCol}>
							<p className={styles.postTilte}>{post.title}</p>
						</td>
						<td className={styles.tableBodyCol}>
							<p>{post.body}</p>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
