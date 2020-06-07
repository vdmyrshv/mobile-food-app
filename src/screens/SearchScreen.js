import React, { useState, useEffect } from "react"
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	ActivityIndicator
} from "react-native"

import SearchBar from "../components/SearchBar"
import ResultsList from "../components/ResultsList"

import useResults from "../hooks/useResults"

const SearchScreen = () => {
	const [term, setTerm] = useState("")

	const { error, loading, results, searchAPI } = useResults()

	return (
		<View style={{ flex: 1 }}>
			<SearchBar term={term} setTerm={setTerm} handleSubmit={searchAPI} />
			<Text style={styles.infoStyle}>
				We have found {results.length} results
			</Text>
			{loading ? (
				<ActivityIndicator size="large" color="darkcyan" />
			) : (
				<ScrollView>
					<ResultsList
						priceRange="Cost Effective"
						results={results.filter(
							(result) => result.price === "$"
						)}
					/>
					<ResultsList
						priceRange="Bit Pricier"
						results={results.filter(
							(result) => result.price === "$$"
						)}
					/>
					<ResultsList
						priceRange="Big Spender"
						results={results.filter(
							(result) => result.price === "$$$"
						)}
					/>
				</ScrollView>
			)}
			{!!error && (
				<Text style={styles.infoStyle}>
					Oops, something wrong! {error}
				</Text>
			)}
		</View>
	)
}

export default SearchScreen

const styles = StyleSheet.create({
	infoStyle: {
		marginLeft: 10
	}
})
