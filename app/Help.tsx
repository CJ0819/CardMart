import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Help() {
  // State to track which FAQ is open (index or null if none)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Sample FAQ data with unique IDs
  const faqs = [
    {
      id: '1',
      question: 'How do I purchase a gift card?',
      answer: 'Browse our selection, choose your gift card, add it to your cart, and proceed to checkout. You can pay with various methods, and the card will be delivered digitally to your email account.',
    },
    {
      id: '2',
      question: 'What payment methods do you accept?',
      answer: 'Simply browse our collection, select your preferred gift card, choose the amount, and complete your purchase securely.',
    },
    {
      id: '3',
      question: 'How do I receive my gift card?',
      answer: 'Gift cards are delivered instantly to your email or your Card Mart account after payment is confirmed.',
    },
    {
      id: '4',
      question: 'Can I get a refund?',
      answer: 'Gift cards are non-refundable once delivered. Please double-check the card type and value before purchase.',
    },
  ];

  // Toggle FAQ item
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome to Card Mart Support</Text>
        <Text style={styles.subHeaderText}>
          We’re here to make your gift card shopping simple, secure, and stress-free. If you ever run into issues, check below for answers or reach out to us directly.
        </Text>
      </View>
      <View style={styles.faqContainer}>
        {faqs.map((faq, index: number) => (
          <View key={faq.id} style={styles.faqItem}>
            <TouchableOpacity
              style={styles.questionContainer}
              onPress={() => toggleFAQ(index)}
            >
              <Text style={styles.questionText}>{faq.question}</Text>
              <Ionicons
                name={openIndex === index ? 'chevron-up-outline' : 'chevron-down-outline'}
                size={24}
                color="green"
              />
            </TouchableOpacity>
            {openIndex === index && (
              <View style={styles.answerContainer}>
                <Text style={styles.answerText}>{faq.answer}</Text>
              </View>
            )}
          </View>
        ))}
      </View>
      <View>
        <View style={styles.assistance}>
        <Text style={styles.headerText}>Need more assistance?</Text>
        <Text style={styles.subHeaderText}>
        If you couldn’t find what you were looking for, our support team is always ready to assist.
        </Text>
      </View>
      </View>
      <View>
        <View style={{flexDirection:"row", alignItems:'center', marginLeft:10, marginTop:20}}>
            <Ionicons name="mail-outline" size={20} color={"green"}/>
            <Text style={{fontSize:16, color:"green", fontWeight:'bold'}}> Email us: </Text>
            <Text style={{fontSize:16}}>support@cardmart.com</Text>  
             </View>
      </View>
      <View>
        <View style={{flexDirection:"row", alignItems:'center', marginLeft:10, marginTop:10}}>
            <Ionicons name="call-outline" size={20} color={"green"}/>
            <Text style={{fontSize:16, color:"green", fontWeight:'bold'}}> Call us: </Text>
            <Text style={{fontSize:16}}>+233 000 123 456</Text>  
             </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginLeft: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: '95%',
    marginTop: 10,
    height: 110,
    borderColor: 'green',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    color: 'green',
  },
  subHeaderText: {
    marginTop: 10,
    fontSize: 16,
  },
  faqContainer: {
    marginTop: 20,
    marginLeft: 10,
    width: '95%',
  },
  faqItem: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    overflow: 'hidden',
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34343C',
    flex: 1,
  },
  answerContainer: {
    padding: 15,
    backgroundColor: '#fff',
  },
  answerText: {
    fontSize: 14,
    color: '#34343C',
  },
  assistance:{
    marginLeft:10
  },
});