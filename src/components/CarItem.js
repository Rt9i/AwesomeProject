import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CarItem = (props) => {
    // const name = props.name;
    const { name, year, km, price, brand, color } = props;


    return (
        <View style={styles.container}>

            <View style={styles.card}>
                <Text style={styles.cardtxt}> my first ui</Text>

                <View style={styles.incard}>
                    
                    <View style={[styles.square, color && { borderColor: color }]}></View>

                    <View style={styles.info}>
                        <Text style={[styles.txt, color && { borderColor: color }]}>{"name: " + name}</Text>
                        <Text style={[styles.txt, color && { borderColor: color }]}> {"brand: " + brand}</Text>
                        <Text style={[styles.txt, color && { borderColor: color }]}>{`year: ${year}`}</Text>
                        <Text style={[styles.txt, color && { borderColor: color }]}>{`price: ${price}`}</Text>
                        <Text style={[styles.txt, color && { borderColor: color }]}>{`km: ${km}`}</Text>
                    </View>

                </View>

            </View>

        </View>
    );
};

export default CarItem

const styles = StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingRight: 1,
        paddingLeft: 1,
        paddingTop: 1,
        paddingBottom: 1,
    },

    incard: {
        width: 390,
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 30,

    },

    card: {
        borderRadius: 30,
        width: 370,
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column-reverse',
        padding: 30,
        paddingBottom: 10,

    },

    txt: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 4,
        borderRadius: 10,
        borderBottomLeftRadius: 10,
        color: 'black',
        padding: 1,
        borderColor: 'yellow',
        paddingLeft: 10,

    },
    square: {
        flex: 0.1,
        borderRadius: 20,
        borderTopWidth: 40,
        borderLeftWidth: 40,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        borderWidth: 20,
        borderColor: 'green',

    },

    info: {
        flex: 10,
        flexDirection: 'column-reverse',


        paddingLeft: 5,
        paddingBottom: 10,


    },
    cardtxt: {
        marginRight: 10,
        flexDirection: 'column-reverse',
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',

    },

})