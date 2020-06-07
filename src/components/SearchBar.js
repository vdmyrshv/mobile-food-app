import React from "react"
import { StyleSheet, Text, View, TextInput } from "react-native"
import { AntDesign } from "@expo/vector-icons"

const SearchBar = ({ term, setTerm, handleSubmit }) => {
    
    const handleChange = (textValue) => {
		setTerm(textValue)
    }
    
	return (
		<View style={styles.backgroundStyle}>
			<AntDesign style={styles.iconStyle} name="search1" color="black" />
			<TextInput
				style={styles.inputStyle}
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="search here"
				value={term}
				onChangeText={handleChange} //rn equivalent of onChange with event object
                onEndEditing={() => handleSubmit(term)} //rn equivalent of handleSubmit
			/>
		</View>
	)
}

export default SearchBar

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: "#afafaf",
		height: 50,
		borderRadius: 4,
		marginHorizontal: 10,
		marginVertical: 5,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		overflow: "hidden"
	},
	iconStyle: {
		marginRight: 10,
		fontSize: 35
	},
	inputStyle: {
		flex: 1,
		alignSelf: "stretch",
		fontSize: 18
	}
})
