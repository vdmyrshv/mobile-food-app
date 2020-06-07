import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"

import SearchBar from "../components/SearchBar"
import ResultsList from '../components/ResultsList'

import useResults from "../hooks/useResults"

const SearchScreen = () => {
	const [term, setTerm] = useState("")

    const { error, loading, results, searchAPI } = useResults()
    
    console.log(results)

	return (
		<View>
			<SearchBar term={term} setTerm={setTerm} handleSubmit={searchAPI} />
			<Text>Search Screen</Text>
			<Text>We have found {results.length} results</Text>
			{loading && <Text>Loading...</Text>}
			{!!error && (
				<Text>Oops, something wrong! {error}</Text>
			)}
            <ResultsList priceRange="cheap" results={results.filter(result => result.price==='$')}/>
            <ResultsList priceRange="medium" results={results.filter(result => result.price==='$$')}/>
            <ResultsList priceRange="expensive" results={results.filter(result => result.price==='$$$')}/>
		</View>
	)
}

export default SearchScreen

const styles = StyleSheet.create({
	listStyle: {}
})
