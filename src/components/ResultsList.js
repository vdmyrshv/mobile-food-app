import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const ResultsList = ({priceRange, results}) => {
    return (
        <View>
            <Text>Results List</Text>
            <Text>{priceRange}</Text>
            <Text>
				{JSON.stringify(results, null, "\t")}
			</Text>
        </View>
    )
}

export default ResultsList

const styles = StyleSheet.create({})
