import React from "react"
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native"

import { withNavigation } from 'react-navigation'

import ResultsDetail from './ResultsDetail'

const ResultsList = ({ priceRange, results, navigation }) => {
	return (
		<View style={styles.listStyle}>
			<Text style={styles.titleStyle}>{!!results.length && priceRange}</Text>
			{/* <Text>{JSON.stringify(results, null, "\t")}</Text> */}
			<FlatList
				horizontal
                showsHorizontalScrollIndicator={false} //removes the scroll indicator
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({ item }) => (
                    //passing a second argument to navigation.navigate is how data is passed through to the target component
                    <TouchableOpacity onPress={()=> navigation.navigate('ResultsShow', { id: item.id })}>
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                )}
        
			/>
		</View>
	)
}

export default withNavigation(ResultsList)

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
