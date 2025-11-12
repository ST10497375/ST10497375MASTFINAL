import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from "react-native";

export default function FilterScreen({ navigation, menu = [] }) {
    const [selectedCourse, setSelectedCourse] = useState("");       //adding new constants for filter functions
    const [maxPrice, setMaxPrice] = useState("");

    const courseOptions = ["Appetizer", "Main course", "Dessert", "Drinks"];

  //filter by course 
  const filteredMenu = setSelectedCourse ? menu.filter((item) => item.course === selectedCourse) : menu;

  return (
    <View style={styles.container}>
        <Text style={styles.title}>FIlter Menu</Text>

        <Text style={styles.title}>Filter by Course:</Text>
        <View style={styles.courseContainer}>
            {courseOptions.map((course) => (
                <TouchableOpacity key={course}
                style={[
                    styles.courseButton, selectedCourse === course && styles.selectedCourse, ]}
                    onPress={() => setSelectedCourse(course === selectedCourse ? "" : course)}
                    >
                    <Text style={[styles.courseText, selectedCourse === course && styles.selectedCourseText, ]}>

                    
                    {course}
                    </Text>
                    </TouchableOpacity>
            ))}
        </View>

        <FlatList data={filteredMenu}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
            <View style={styles.menuItem}>
                <Text style={styles.menuName}>{item.name}</Text>
                <Text style={styles.menuDetails}>
                    {item.course} . {item.description} . R{item.price.toFixed(2)}
                </Text>
            </View>
        )}
        ListEmptyComponent={
        <Text style={styles.emptyText}>No menu items found</Text>
        }
    />

    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
},

title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
},

courseContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 20,
},

courseButton: {
    padding: 10,
    margin: 5,
    backgroundColor: "#ddd",
    borderRadius: 8,
},

selectedCourse: {
    backgroundColor: "#007AFF",
},

courseText: {
    fontSize: 16, 
    color: "#000",
},

selectedCourseText: {
    color: "#fff",
    fontWeight: "bold",
},

menuName: {
    fontSize: 18,
    fontWeight: "bold",
},

menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
},

menuDetails: {
    fontSize: 14,
    color: "#555",
},

emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#999",
},

backButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    alignSelf: "center",    
},

backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
},

});
