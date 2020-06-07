import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units'

const PhotoView = ({item}) => {
    return (
        <View>
            <Image style={styles.imageStyle} source={{uri: item}} />
        </View>
    )
}

export default PhotoView

const styles = StyleSheet.create({
    imageStyle: {
        width: vw(80),
        aspectRatio: 1/1,
        borderRadius: 5,
        marginBottom: 20
    }
})
