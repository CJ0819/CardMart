import { router } from "expo-router";
import React from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { allGiftCards } from "../data/giftCards";

const { width } = Dimensions.get("window");
const newCards = allGiftCards.slice(0, 6);
const New = () => {
   const renderGiftCard = ({ item }: { item: typeof newCards[0] }) => (
       <TouchableOpacity
         style={styles.giftCardContainer}
         onPress={() => router.push(`/payment?id=${item.id}`)}
       >
         <Image source={item.image} style={styles.giftCardImage} />
         <Text style={styles.giftCardName}>{item.name}</Text>
       </TouchableOpacity>
     );
    return (
        <View style={styles.container}>
              <FlatList
                data={newCards}
                renderItem={renderGiftCard}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 20 }}
              />
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 10,
        alignSelf: "flex-start",
    },
    giftCardContainer: {
        alignItems: "center",
        marginHorizontal: 8,
        marginBottom: 16,
        width: (width * 0.95 - 40) / 2,
    },
    giftCardImage: {
        width: 180,
        height: 180,
        borderRadius: 10,
        resizeMode: "cover",
    },
    giftCardName: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: "500",
        color: "#34343C",
        textAlign: "center",
    },
});

export default New;