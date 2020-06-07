import React, { useState, useEffect } from "react"
import yelp from '../api/yelp'

const useResults = () => {
	const [results, setResults] = useState([])
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)

	const searchAPI = async (searchTerm) => {
		setLoading(true)
		setResults([])
		try {
			const response = await yelp.get("/search", {
				params: {
					term: searchTerm,
					location: "boston",
					limit: 2
				}
			})
			setLoading(false)
			console.log(response.data.businesses)
			setResults(response.data.businesses)
		} catch (err) {
			console.log(`request failed:  ${err}`)
			setLoading(false)
			setError(err.message)
			console.log(err)
			setTimeout(() => {
				setError("")
			}, 5000)
		}
	}

	useEffect(() => {
		searchAPI("cake")
	}, [])

	return { error, loading, results, searchAPI }
}

export default useResults