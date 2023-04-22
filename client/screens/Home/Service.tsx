import { View, Text, FlatList } from "react-native"
import React from "react"
import Layout from "../../components/Layout"
import ServiceHeader from "../../components/Home/ServiceHeader"
import BookServiceCard from "../../components/Home/BookServiceCard"

type Props = {}

export const data = [
    {
        id: "12421312",
        name: "Jhon Doe",
        phone: "2342342",
        mail: "abc@gmail.com",
        price: "300",
        isActive: false,
        service: "electrician",
    },
    {
        id: "2312312",
        name: "Jhon Doeeee",
        phone: "234234sdas2",
        mail: "abcasdas@gmail.com",
        price: "3300",
        isActive: true,
        service: "electrician",
    },
]

const Service = ({ navigation, route }: any) => {
    const { service } = route.params
    return (
        <Layout>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <BookServiceCard details={item} navigation={navigation} />
                )}
                keyExtractor={(item) => item.phone}
                ListHeaderComponent={<ServiceHeader service={service} />}
            />
        </Layout>
    )
}

export default Service
