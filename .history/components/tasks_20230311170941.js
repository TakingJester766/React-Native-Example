import React from 'react';
import { View, Text, StyleSheet } from 'react-native';  

const Task = () => {
    return (
        <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>Task 1</Text>
        </View>
        <View style={styles.circular}></View>
        </View>
    )
}