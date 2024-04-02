import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const LaureateDetails = ({ route }) => {

    const id = route.params.id;

    const [laureate, setLaureate] = useState();

    const findLaureate = async () => {
        const response = await fetch(`https://api.nobelprize.org/2.1/laureate/${id}`);
        const data = await response.json();
        console.log(data[0]);
        setLaureate(data[0]);
    }

    useEffect(() => {
        findLaureate();
    }, [])

    return (
        <ScrollView>
            {laureate ? (


                <View style={styles.container}>
                    <View style={styles.heading}>
                        <Text style={styles.headingText}>
                            {laureate?.fullName?.en}
                        </Text>
                    </View>
                    <View style={styles.view}>
                        <Text>
                            Birthdate: {laureate?.birth?.date || 'Unknown'}
                        </Text>
                        <Text>
                            Location: {laureate?.birth?.place?.city?.en || 'Unknown'}
                        </Text>
                    </View>
                    <View style={styles.prize}>
                        <Text style={styles.prizeHeading}>
                            Nobel Prize(s)
                        </Text>
                    </View>
                    <View>
                        {laureate?.nobelPrizes?.map((prize, i) => {
                            return (
                                <View key={i}>
                                    <Text style={styles.bold}>
                                        Category: {prize?.category?.en}
                                    </Text>
                                    <Text style={styles.bold}>
                                        Year: {prize?.awardYear}
                                    </Text>
                                    <Text >
                                        Motivation: {prize?.motivation?.en}
                                    </Text>
                                </View>

                            )
                        })}
                    </View>
                </View>
            ) : (<ActivityIndicator />)}

        </ScrollView>
    )
}

export default LaureateDetails

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white',
        width: '100%',
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    heading: {
        marginTop: 20,
        marginBottom: 20,
    },
    headingText: {
        paddingBottom: 20,
        paddingTop: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '25px'
    },
    view: {
        marginTop: 5,
        marginBottom: 5,
    },
    prize: {
        marginTop: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBlockColor: '#D8D8D8'
    },
    prizeHeading: {
        paddingBottom: 20,
        paddingTop: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '20px'
    },
    bold: {
        fontWeight: 'bold'
    },
    activity: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    }
});