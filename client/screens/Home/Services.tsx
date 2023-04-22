import { FlatList } from "react-native"
import React from "react"
import HomeHeader from "../../components/Home/HomeHeader"
import { COLORS } from "../../utils/constants"
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons"
import ServiceCard from "../../components/Home/ServiceCard"
import Layout from "../../components/Layout"

type Props = {}

export const data = [
    {
        service: "electrician",
        description: "Let us light up your life",
        img: require("../assets/electrician-avatar.webp"),
        icon: (
            <MaterialCommunityIcons
                name="lightning-bolt"
                size={100}
                color={COLORS.sec}
            />
        ),
    },
    {
        service: "plumber",
        description: "Your trusted partner for plumbing solutions",
        img: require("../assets/plumber-avatar.webp"),
        icon: <MaterialIcons name="plumbing" size={100} color={COLORS.sec} />,
    },
    {
        service: "cleaner",
        description: "Creating a clean space for a better you",
        img: require("../assets/cleaner-avatar.png"),
        icon: (
            <MaterialCommunityIcons
                name="broom"
                size={100}
                color={COLORS.sec}
            />
        ),
    },
    {
        service: "carpenter",
        description: "Quality craftsmanship, every time",
        img: require("../assets/carpenter-avatar.webp"),
        icon: <MaterialIcons name="carpenter" size={100} color={COLORS.sec} />,
    },
]

const Services = ({ navigation }: any) => {
    return (
        <Layout>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <ServiceCard
                        service={item}
                        index={index}
                        navigation={navigation}
                    />
                )}
                className=" w-full h-full"
                contentContainerStyle={{
                    paddingBottom: 40,
                }}
                keyExtractor={(item) => item.service}
                ListHeaderComponent={<HomeHeader />}
            />
        </Layout>
    )
}

export default Services
