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
    item,
    itemLeft,
    square,
    itemText,
    circular
});

export default Task;