import { ListItem } from '@rneui/base'
import React, { useEffect, useState } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
const Categories = ({ navigation }) => {

    const [categories, setCategories] = useState(['Chemistry', 'Economics', 'Literature', 'Peace', 'Physics', 'Physiology or Medicine'])

    // const [years, setYears] = useState([]);

    // const fetchData = async () => {
    //     const response = await fetch('https://api.nobelprize.org/2.1/nobelPrizes?yearTo=2023');
    //     const data = await response.json();

    //     console.log(data);
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    return (
        <ScrollView>
            <View>
                <ListItem>
                    <ListItem.Content style={styles.container}>
                        {categories.map((category, i) => {
                            return (
                                <View style={styles.list} key={i} >
                                    <Text onPress={() => navigation.navigate('Prize Years', { category: category })}>
                                        {category}
                                    </Text>
                                </View>

                            )
                        })}
                    </ListItem.Content>
                </ListItem>
            </View>
        </ScrollView >
    )
}

export default Categories

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

