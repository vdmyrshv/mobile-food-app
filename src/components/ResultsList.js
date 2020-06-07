import React from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"

import ResultsDetail from './ResultsDetail'

const ResultsList = ({ priceRange, results }) => {
	return (
		<View style={styles.listStyle}>
			<Text style={styles.titleStyle}>{priceRange}</Text>
			{/* <Text>{JSON.stringify(results, null, "\t")}</Text> */}
			<FlatList
				horizontal
                showsHorizontalScrollIndicator={false} //removes the scroll indicator
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({ item }) => <ResultsDetail result={item} />}
			/>
		</View>
	)
}

export default ResultsList

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 30,
        color: "darkcyan",
        marginLeft: 10,
        marginBottom: 10
    },
    listStyle: {
        marginBottom: 10
    }
})
