import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';  

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>


            </View>

            <Text>{props.text}</Text>
            <View style={styles.circular}></View>

        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {

    },
    square: {},
    itemText: {},
    circular: {}
});

export default Task;