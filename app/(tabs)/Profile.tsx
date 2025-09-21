import { Ionicons } from '@expo/vector-icons'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@firebase/auth'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Button, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth } from "../../FirebaseConfig"

const Profile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [user, setUser] = useState<any>(null);

  // States for modals
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Listen for auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowSignIn(false);
    } catch (error: any) {
      alert('Sign in failed: ' + error.message);
    }
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setShowSignUp(false);
    } catch (error: any) {
      alert('Sign up failed: ' + error.message);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setShowMenu(false);
    } catch (error: any) {
      alert('Logout failed: ' + error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Profile Card */}
      <View style={{
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 10,
        width: "95%",
        marginLeft: 10,
        height: 140,
        borderColor: 'green',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.2,
        shadowColor: "green",
        elevation: 5,
        marginBottom: 30
      }}>
        {user ? (
          // If logged in
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
            onPress={() => setShowMenu(true)}
          >
            <Ionicons name='person-circle-outline' size={60} color={'green'} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 17, fontWeight: '500' }}>
                Welcome back,
              </Text>
              <Text style={{ fontSize: 16, color: '#34343C', marginTop: 4 }}>
                {user.email}
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          // If not logged in
          <>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
              <Ionicons name='person-circle-outline' size={60} color={'#34343C'} />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: '500' }}>
                  Oops looks like you haven't signed in
                </Text>
                <Text style={{ fontSize: 16, color: '#34343C', marginTop: 4 }}>
                  Create an account or login
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 40, gap: 10 }}>
              <View style={{ borderRadius: 90, width: "40%", backgroundColor: 'green' }}>
                <Button title='Sign up' onPress={() => setShowSignUp(true)} color="white" />
              </View>
              <View style={{ borderRadius: 90, width: "40%", backgroundColor: '#34343C' }}>
                <Button title='Login' onPress={() => setShowSignIn(true)} color="white" />
              </View>
            </View>
          </>
        )}
      </View>

      {/* Other Navigation Buttons */}
      <TouchableOpacity
        onPress={() => router.push('/Help')}
        style={{
          flexDirection: 'row',
          marginLeft: 20,
          marginBottom: 20,
          borderWidth: 1,
          width: "90%",
          borderRadius: 10,
          height: 50,
          alignItems: 'center',
          borderColor: 'green',
        }}
      >
        <Ionicons name="information-circle-outline" size={30} color={"green"} />
        <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', flex: 1 }}>Help & Support</Text>
        <Ionicons name="chevron-forward-outline" size={30} color={"green"} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/Settings')}
        style={{
          flexDirection: 'row',
          marginLeft: 20,
          marginBottom: 20,
          borderWidth: 1,
          width: "90%",
          borderRadius: 10,
          height: 50,
          alignItems: 'center',
          borderColor: 'green',
        }}
      >
        <Ionicons name="settings-outline" size={30} color={"green"} />
        <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', flex: 1 }}>Settings</Text>
        <Ionicons name="chevron-forward-outline" size={30} color={"green"} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/Legal')}
        style={{
          flexDirection: 'row',
          marginLeft: 20,
          marginBottom: 20,
          borderWidth: 1,
          width: "90%",
          borderRadius: 10,
          height: 50,
          alignItems: 'center',
          borderColor: 'green',
        }}
      >
        <Ionicons name="book-outline" size={30} color={"green"} />
        <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', flex: 1 }}>Legal Information</Text>
        <Ionicons name="chevron-forward-outline" size={30} color={"green"} />
      </TouchableOpacity>

      {/* User Menu Modal */}
      <Modal visible={showMenu} animationType="slide" transparent>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}>
          <View style={{
            backgroundColor: 'white',
            width: '80%',
            borderRadius: 10,
            padding: 20
          }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Your Profile</Text>
            <Text>Email: {user?.email}</Text>
            <View style={{ marginTop: 20 }}>
              <Button title="Logout" color="red" onPress={logOut} />
              <Button title="Close" onPress={() => setShowMenu(false)} />
            </View>
          </View>
        </View>
      </Modal>

      {/* Sign In Modal */}
      <Modal visible={showSignIn} animationType="slide" transparent>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', width: '80%', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Sign In</Text>
            <Text style={{marginBottom:10, color:'gray'}}>Sign in to your account</Text>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              style={{ borderWidth: 1, borderColor: 'gray', padding: 10, borderRadius: 8, marginBottom: 10 }}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={{ borderWidth: 1, borderColor: 'gray', padding: 10, borderRadius: 8, marginBottom: 20 }}
            />
            <View style={{borderWidth:1, borderColor:'green', borderRadius:25, width:"50%", alignSelf:'center', marginBottom:10}}>
              <Button title="Sign In" onPress={signIn} />
            </View>

             <View style={{borderWidth:1, borderColor:'red', borderRadius:25, width:"50%", alignSelf:'center', marginBottom:10}}>
                  <Button title="Cancel" color="red" onPress={() => setShowSignIn(false)} />
            </View>
   
          </View>
        </View>
      </Modal>

      {/* Sign Up Modal */}
      <Modal visible={showSignUp} animationType="slide" transparent>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', width: '80%', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Sign Up</Text>
            <Text style={{marginBottom:10, color:'gray'}}>Create a new account using your email</Text>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              style={{ borderWidth: 1, borderColor: 'gray', padding: 10, borderRadius: 8, marginBottom: 10 }}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={{ borderWidth: 1, borderColor: 'gray', padding: 10, borderRadius: 8, marginBottom: 20 }}
            />
            <View style={{borderWidth:1, borderColor:'green', borderRadius:25, width:"50%", alignSelf:'center', marginBottom:10}}>
              <Button title="Sign Up" onPress={signUp} />
            </View>
             <View style={{borderWidth:1, borderColor:'red', borderRadius:25, width:"50%", alignSelf:'center'}}>
              <Button title="Cancel" color="red" onPress={() => setShowSignUp(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default Profile;
