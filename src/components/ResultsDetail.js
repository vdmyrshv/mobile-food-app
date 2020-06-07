import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.resultStyle}>
            <Image style={styles.imageStyle} source={{uri: result.image_url}}/>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text style={styles.descriptionStyle}>{result.rating} stars - {result.review_count} reviews</Text>
        </View>
    )
}

export default ResultsDetail

const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 100,
        borderRadius: 5
    },
    resultStyle: {
        marginLeft: 10
    },
    nameStyle: {
        fontSize: 15,
        fontWeight: "bold"
    },
    descriptionStyle: {
        fontSize: 10
    }

})
