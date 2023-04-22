import { Animated, Dimensions } from "react-native"
import React, { useEffect, useState, useRef } from "react"
import { services } from "../utils/constants"
import SliderCard from "./SliderCard"

type Props = {}

const Slider = (props: Props) => {
    const [sliderIndex, setSliderIndex] = useState(0)
    const translateIndex = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.spring(translateIndex, {
            toValue: (Dimensions.get("window").width + 2) * -1 * sliderIndex,
            bounciness: 8,
            useNativeDriver: true,
        }).start()
    }, [sliderIndex])

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setSliderIndex((e) => (e < services.length - 1 ? e + 1 : 0))
        }, 2000)

        return () => clearInterval(sliderInterval)
    }, [])

    return (
        <Animated.View
            style={{
                transform: [{ translateX: translateIndex }],
            }}
            className="  flex flex-row   transition-all"
        >
            {services.map((service, i) => (
                <SliderCard key={i} service={service} />
            ))}
        </Animated.View>
    )
}

export default Slider
