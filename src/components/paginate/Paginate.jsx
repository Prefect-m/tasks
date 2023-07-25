import React, { useEffect, useState } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import styles from "./paginate.module.scss"
import { useNavigate } from "react-router-dom"

export const Paginate = ({ setPage, limit, current }) => {
	const { posts } = useAppSelector()
	const [totalPages, setTotalPages] = useState(1)
	const history = useNavigate()
	const totalPagesCount = Math.ceil(posts.totalPosts / limit)

	useEffect(() => {
		setTotalPages(totalPagesCount)
		history(`?page=${current}`)
	}, [current, posts])

	// PREV HANDLER
	const prevPageHandler = () => {
		setPage((page) => page - 1)
	}

	// NEXT HANDLER
	const nextPageHandler = () => {
		setPage((page) => page + 1)
	}

	// ITEMS CHANGE PAGE
	const handlePageChange = (page) => {
		setPage(page)
	}

	// ITEMS RENDER
	const renderItems = () => {
		const numbers = []
		for (let i = 1; i <= totalPages; i++) {
			numbers.push(
				<button
					key={i}
					onClick={() => handlePageChange(i)}
					className={current === i ? styles.active : ""}
				>
					<span>{i}</span>
				</button>
			)
		}
		return numbers
	}

	return (
		<div className={styles.paginate}>
			<button onClick={prevPageHandler} disabled={current === 1}>
				Назад
			</button>
			<div className={styles.paginateItems}>{renderItems()}</div>
			<button onClick={nextPageHandler} disabled={current === totalPages}>
				Далее
			</button>
		</div>
	)
}
