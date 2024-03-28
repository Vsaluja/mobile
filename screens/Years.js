import { ListItem } from '@rneui/base'
import React, { useEffect, useState } from 'react'

import { Text, Card, Button, Icon } from '@rneui/themed';
import { View, ScrollView, StyleSheet } from 'react-native';

const Years = ({ navigation, route }) => {

    const [years, setYears] = useState([]);

    const yearsArray = () => {
        for (let i = 2023; i >= 1901; i--) {
            setYears((prev) => [...prev, i]);
        }
    }

    const fetchData = async (year) => {
        try {

            let category = "";

            if (route.params.category === 'Chemistry') {
                category = 'che'
            }
            else if (route.params.category === 'Economics') {
                category = 'eco'
            }
            else if (route.params.category === 'Literature') {
                category = 'lit'
            }
            else if (route.params.category === 'Peace') {
                category = 'pea'
            }
            else if (route.params.category === 'Physics') {
                category = 'phy'
            }
            else if (route.params.category === 'Physiology or Medicine') {
                category = 'med'
            }



            const response = await fetch(`https://api.nobelprize.org/2.1/nobelPrize/${category}/${year}`);
            const data = await response.json();

            navigation.navigate('Prize Details', { prize: data[0].awardYear ? data[0] : "" })



        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {

        yearsArray();
    }, [])

    return (
        <ScrollView>
            <ListItem>
                <ListItem.Content>
                    {years.map((year, i) => {
                        return (
                            <View key={i} style={styles.list}>
                                <Text onPress={() => fetchData(year)}>
                                    {year}
                                </Text>
                            </View>
                        )
                    })}
                </ListItem.Content>
            </ListItem>
        </ScrollView>
    )
}

export default Years

const styles = StyleSheet.create({
    list: {
        margin: 5,
        padding: 5,
        // textDecorationLine: 'underline'
        width: '100%',
        borderBottomWidth: 1,
        borderBlockColor: '#D8D8D8'
    },
});