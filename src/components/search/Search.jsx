import React, { useEffect, useState } from "react"
import styles from "./search.module.scss"
import { Filed } from "../"
import { ReactComponent as SearchIcon } from "./search.svg"
import { useAppActions } from "../../hooks/useAppActions"

export const Search = () => {
	const [searchValue, setSearchValue] = useState("")
	const { postSearch, fetchPosts } = useAppActions()

	useEffect(() => {
		if (searchValue.length) {
			postSearch(searchValue)
		} else {
			fetchPosts()
		}
	}, [searchValue])

	return (
		<div className={styles.search}>
			<div className={styles.searchField}>
				<Filed
					type='text'
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				<label>Поиск</label>
				<button className={styles.searchButton}>
					<SearchIcon />
				</button>
			</div>
		</div>
	)
}
