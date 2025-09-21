import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { allGiftCards } from "../../data/giftCards";

const { width } = Dimensions.get("window");

export default function Index() {
  const scrollRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slice gift cards by index instead of category
  const topDeals = allGiftCards.slice(0, 6);
  const popularToday = allGiftCards.slice(6, 12);
  const newCards = allGiftCards.slice(12, 18);

  const images = [
    require("../../assets/images/slider1.png"),
    require("../../assets/images/slider2.webp"),
    require("../../assets/images/slider3.jpg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      scrollRef.current?.scrollTo({ x: nextIndex * width, animated: true });
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderHorizontalScroll = (cards: typeof allGiftCards) => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.giftCardContent}>
      {cards.map(card => (
        <TouchableOpacity
          key={card.id}
          style={styles.giftCardContainer}
          onPress={() => router.push({ pathname: "/payment", params: { id: card.id } })}
        >
          <Image source={card.image} style={styles.giftCardImage} />
          <Text style={styles.giftCardName}>{card.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#34343C" style={{ marginRight: 8, marginLeft: 8 }} />
        <TextInput placeholder="Search for giftcards" placeholderTextColor="#34343C" style={{ flex: 1 }} />
      </View>

      {/* Slider */}
      <ScrollView ref={scrollRef} horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={styles.sliderContainer}>
        {images.map((img, i) => (
          <Image key={i} source={img} style={[styles.sliderImage, { width: width * 0.95 }]} />
        ))}
      </ScrollView>

      {/* Top Deals */}
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>Top Deals</Text>
        <Link href="/topdeals" style={styles.viewDetailsLink}>View details</Link>
      </View>
      {renderHorizontalScroll(topDeals)}

      {/* Popular Today */}
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>Popular Today</Text>
        <Link href="/populartoday" style={styles.viewDetailsLink}>View details</Link>
      </View>
      {renderHorizontalScroll(popularToday)}

      {/* New */}
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>New</Text>
        <Link href="/new" style={styles.viewDetailsLink}>View details</Link>
      </View>
      {renderHorizontalScroll(newCards)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingBottom: 20 },
  searchContainer: {
    marginTop: 10, marginHorizontal: "2.5%", height: 40,
    borderRadius: 5, borderColor: "#34343C", borderWidth: 1,
    flexDirection: "row", alignItems: "center",
  },
  sliderContainer: { marginTop: 20, height: 200, borderRadius: 35 },
  sliderImage: { borderRadius: 10, height: "100%", resizeMode: "cover", marginHorizontal: width * 0.05 / 2 },
  categoryHeader: { flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginHorizontal: "2.5%", marginBottom: -8 },
  categoryTitle: { fontWeight: "bold", fontSize: 20, marginBottom: 20 },
  viewDetailsLink: { color: "green", fontSize: 16 },
  giftCardContent: { paddingHorizontal: 10 },
  giftCardContainer: { alignItems: "center", marginHorizontal: 8 },
  giftCardImage: { width: 100, height: 100, borderRadius: 10, resizeMode: "cover" },
  giftCardName: { marginTop: 5, fontSize: 14, fontWeight: "500", color: "#34343C" },
});
