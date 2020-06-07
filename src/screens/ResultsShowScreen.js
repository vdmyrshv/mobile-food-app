import React, { useEffect, useState } from "react"
import {
	StyleSheet,
	Text,
	View,
	ActivityIndicator,
	FlatList
} from "react-native"

import PhotoView from '../components/PhotoView'

import yelp from "../api/yelp"

const ResultsShowScreen = ({ navigation }) => {
	const [result, setResult] = useState({})
	const [loading, setLoading] = useState(false)

	const id = navigation.getParam("id")

	const getResult = async (id) => {
		setLoading(true)
		try {
			const { data } = await yelp.get(`/${id}`)
			setResult(data)
		} catch (err) {
			console.log(err)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getResult(id)
	}, [])

	return (
		<View style={styles.viewStyle}>
			{loading ? (
				<ActivityIndicator
					style={styles.spinnerStyle}
					size="large"
					color="orange"
				/>
			) : (
				<View style={styles.viewStyle}>
					<Text style={styles.titleStyle}>{result.name}</Text>
					<FlatList
                        style={styles.imageParentStyle}
						data={result.photos}
						showsVerticalScrollIndicator={false}
						keyExtractor={(photo) => photo}
						renderItem={({item}) => (
                            <PhotoView item={item}/>
                        )}
					/>
				</View>
			)}
		</View>
	)
}

export default ResultsShowScreen

const styles = StyleSheet.create({
    imageParentStyle: {
        display: "flex"
    },
	viewStyle: {
        flex: 1,
        alignItems: "center"
	},
	titleStyle: {
		fontSize: 30,
		color: "darkcyan",
		textAlign: "center",
		marginVertical: 20
	},
	spinnerStyle: {
		flex: 1
	}
})
