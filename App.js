import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TabBarIOS } from 'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from './components/signup/SignUp';
import Start from './components/home/Start';
import BoxInput from './components/RecipeBoxes/BoxTextInput';
import IngredientsInput from './components/ingredients/IngredientsInput';
import InstructionsInput from './components/instructions/InstructionsInput';
import BoxItem from './components/RecipeBoxes/BoxItem';
import RecipeItem from './components/recipes/RecipeItem';
import IngredientsItem from './components/ingredients/IngredientsItem';
import InstructionsItem from './components/instructions/InstructionsItem';
import ProfileCard from './components/profilecard/ProfileCard';

import RecipeApp from './src/RecipeApp';
import store from './src/store'
import { Provider } from 'react-redux';
import VisibleTodos from './src/containers/VisibleTodos';


export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

// handles input from add box form
  const addBoxHandler = (itemTitle) => {
    setBoxes((currentItems) => [
      ...boxes, 
      { uid: Math.random().toString(), value: itemTitle },
    ]);
  };

// handles removale of box on click of delete button
const removeBoxHandler = (itemId) => {
  setBoxes((currentItems) => {
    return currentItems.filter((item) => item.uid !== itemId);
  });
};

// home screen navigation
function HomeScreen({navigation}) {
  
  return (
    <View style={styles.container} >
      {/* add recipe button */}
        <Start/>
        <Button
        title="Add Recipe Box"
        onPress={() => navigation.navigate('AddBox')}
      />

      {/* list of recipe boxes */}
      <FlatList 
        keyExtractor={(item, index) => item.uid}
        data={boxes} 
        renderItem={(itemData) => (
          <BoxItem 
            id = {itemData.item.uid}
            onDelete={removeBoxHandler.bind(this, itemData.item.uid)}
            openBox={() => navigation.navigate('Box')}
            title={itemData.item.value} 
            
          /> 
        )} 
      />

      {/* view profile button */}
      <View style={styles.profile}>
        <Button
          title= "View Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
        
    </View>
  );
}

// recipes navigation
function Recipes({navigation}) {
  return (
    <View style={styles.container}>
    <Provider store={store}>
      
      <View>
          <VisibleTodos />
      </View>
      <Button
        title="Add Recipe"
        onPress={() => navigation.navigate('AddRecipe')}
        
      />
    </Provider>
    </View>
  );
}

// profile navigation
function Profile({navigation}) {
  return (
    <View style={styles.container} >
        <ProfileCard/>

        
    </View>
  );
}

// stack navigation for home screen
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen 
          name="Home" component={HomeScreen} 
          options={{
            title: 'Recipe Box',
            headerStyle: {
              backgroundColor: '#ff8c00',
            },
            headerTitleStyle: {
              fontFamily: 'Marker Felt, Arial, sans-serif',
              fontSize: 36,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
            },
          }}
        />
      <HomeStack.Screen 
          name="AddBox" component={AddBox} 
          options={{
            title: 'Add a Recipe Box',
          }}
        />

<HomeStack.Screen 
          name="Box" component={Box} 
          options={{
            title: 'Box',
          }}
        />
        <HomeStack.Screen 
          name="AddRecipe" component={AddRecipe} 
          options={{
            title: 'Add a Recipe',
          }}
        />
        <HomeStack.Screen
          name="Profile" component={ProfileCard}
          options={{
            title: 'Profile'
          }}
        />
      
    </HomeStack.Navigator>
  )
}

// stack navigation for recipes
const RecipeStack = createStackNavigator();

function RecipeStackScreen() {
  return(
    <RecipeStack.Navigator>
      <RecipeStack.Screen 
          name="Recipes" component={Recipes} 
          options={{
            title: 'Recipe Box',
            headerStyle: {
              backgroundColor: '#ff8c00',
            },
            headerTitleStyle: {
              fontFamily: 'Marker Felt, Arial, sans-serif',
              fontSize: 36,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
            },
          }}
        />
      <RecipeStack.Screen 
          name="AddRecipe" component={AddRecipe} 
          options={{
            title: 'Add a Recipe',
          }}
        />
      
      
    </RecipeStack.Navigator>
  )
}

// stack navigation for profile
const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return(
    <ProfileStack.Navigator>
      <ProfileStack.Screen 
          name="Profile" component={Profile} 
          options={{
            title: 'Recipe Box',
            headerStyle: {
              backgroundColor: '#ff8c00',
            },
            headerTitleStyle: {
              fontFamily: 'Marker Felt, Arial, sans-serif',
              fontSize: 36,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
            },
          }}
        />
      
      
    </ProfileStack.Navigator>
  )
}

// handles input for add box text input
function AddBox() {
  return (
    <View style={styles.container} >
      <BoxInput onAddBox = {addBoxHandler} />
    </View>
  );
}

// handles navigation to box page
function Box({navigation}) {
  return (
    <View style={styles.container}>
      <Provider store={store}>
      
      <View>
          <VisibleTodos />
      </View>
      <Button
        title="Add Recipe"
        onPress={() => navigation.navigate('AddRecipe')}
      />
    </Provider>
    </View>
  )
}

// add recipe page
function AddRecipe() {
  return (
    <View style={styles.container} >
      <Provider store={store}>
        <RecipeApp />
      </Provider>
    </View>
  );
}


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// app content
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Recipe Boxes" component={HomeStackScreen} />
        <Tab.Screen name="Recipes" component={RecipeStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
      
        

    </NavigationContainer>

      
      
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },

  header: {
    backgroundColor: 'orange',
    paddingBottom: 20,
    paddingTop: 20,
  },

  profile: {
    marginBottom: 30,
  }
});
