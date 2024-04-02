import React, { useEffect, useState } from 'react'
import { View, ScrollView, StyleSheet, FlatList, ActivityIndicator, } from 'react-native';
import { ListItem } from '@rneui/base';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
const LaureatesList = ({ navigation }) => {

    const [limit, setLimit] = useState(25);
    const [laureates, setLaureates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchLaureates = async () => {
        setIsLoading(true);
        const response = await fetch(`https://api.nobelprize.org/2.1/laureates?limit=${limit}`);
        const data = await response.json();

        console.log(data);
        setLaureates(data.laureates);
        setLimit((prev) => prev + 25);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchLaureates();
    }, [])

    return (


        <SafeAreaView style={styles.container}>


            <FlatList
                data={laureates}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <ListItem onPress={() => navigation.navigate('Laureate Details', { id: item.id })}>
                            <ListItem.Content>
                                <ListItem.Title>{item?.givenName?.en}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    )
                }}
                onEndReached={fetchLaureates}
                onEndReachedThreshold={0.5}
            />

            {isLoading && <ActivityIndicator />}

        </SafeAreaView>

    )
}

export default LaureatesList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    }
})
