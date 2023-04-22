import { View, Text, StyleSheet } from "react-native"
import React from "react"
import Mapbox from "@rnmapbox/maps"

type Props = {}

Mapbox.setAccessToken(
    "pk.eyJ1Ijoicm9zaGFucnYiLCJhIjoiY2xncmV6OTZ6MDRnNjNub2M4eGNtbWhqNiJ9.PtTrUgkfUmW5N4haJF0HtA"
)

const Test = (props: Props) => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Mapbox.MapView style={styles.map} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        height: 300,
        width: 300,
    },
    map: {
        flex: 1,
    },
})

export default Test
