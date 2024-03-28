import React, { useEffect, useState } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

const PrizeDetails = ({ route }) => {

    const [prize, setPrize] = useState();
    useEffect(() => {

        setPrize(route.params.prize);


    }, [])



    return (
        <ScrollView>
            {prize ? (
                <View>
                    <View>
                        <Text>
                            {prize?.category?.en}
                        </Text>
                        <Text>
                            {prize?.awardYear}
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Awarded on: {prize?.dateAwarded}
                        </Text>
                        <Text>
                            Amount: {prize?.prizeAmount} SEK
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Laureate(s)
                        </Text>
                        {prize?.laureates?.map((laureate, i) => {
                            return (
                                <View key={i}>
                                    <Text>
                                        Laureate: {laureate?.fullName?.en}
                                    </Text>
                                    <Text>
                                        Motivation: {laureate?.motivation?.en}
                                    </Text>
                                </View>
                            )
                            // console.log(laureate);
                        })}
                    </View>
                </View>
            ) : (
                <View>
                    <Text>
                        No results found
                    </Text>
                </View>
            )}

        </ScrollView>
    )
}

export default PrizeDetails


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: '100%',
        height: 50
    },
    block: {

        margin: 5,
        padding: 5,
        // textDecorationLine: 'underline'
        width: '100%',
        borderBottomWidth: 1,
        borderBlockColor: ''
    }
});