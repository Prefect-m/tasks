import React, { useEffect, useState } from "react"
import { Paginate, Search, Table } from "../components"
import { useAppActions } from "../hooks/useAppActions"
import { useAppSelector } from "../hooks/useAppSelector"
import styles from "./home.module.scss"

export const Home = () => {
	const { fetchPosts } = useAppActions()
	const { posts } = useAppSelector()

	const [currentPage, setCurrentPage] = useState(1)

	const setCurrentPageHandler = (value) => setCurrentPage(value)

	useEffect(() => {
		fetchPosts(10, currentPage)
	}, [currentPage])

	return (
		<main className={styles.homeContainer}>
			<Search />
			<div className={styles.posts}>
				<Table posts={posts.posts} />
				<Paginate
					setPage={setCurrentPageHandler}
					current={currentPage}
					limit={10}
				/>
			</div>
		</main>
	)
}
