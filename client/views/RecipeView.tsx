import { Flex, Text, ListItem } from "@react-native-material/core";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Image, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  image: {
    top: 0,
    left: 0,
    width: "100%",
    height: 200,
  },
  details: {
    width: "100%",
    backgroundColor: "#FDFBF7",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: "100%",
    padding: 20,
  },
  header: {
    marginTop: 20,
    fontWeight: "700",
    fontSize: 32,
  },
  subheader: {
    marginTop: 20,
    fontWeight: "700",
    fontSize: 16,
  },
  text: {
    fontWeight: "400",
    fontSize: 14,
  },
});

export default function RecipeView(props: any) {
  function renderArrayCB(ingredient: any) {
    return (
      <ListItem
        title={ingredient.name}
        key={ingredient.name}
        trailing={(props) => (
          <AntDesign name="pluscircleo" size={24} color="black" />
        )}
      />
    );
  }
  return (
    <Flex fill direction="column">
      <Image style={styles.image} source={props.recipe.strMealThumb}></Image>
      <Flex direction="column" style={styles.details}>
        <Text style={styles.header}>{props.recipe.strMeal}</Text>
        <Text style={styles.subheader}>What do you need?</Text>
        <>
          <View>
            {props.recipe.ingredients &&
              props.recipe.ingredients.map(renderArrayCB)}{" "}
          </View>
          <ListItem
            title="Ingr1"
            trailing={(props) => (
              <AntDesign name="pluscircleo" size={24} color="black" />
            )}
          />
          <ListItem
            title="Ingr2"
            trailing={(props) => (
              <AntDesign name="pluscircleo" size={24} color="black" />
            )}
          />
        </>
        <Text style={styles.subheader}>How to make it?</Text>
        <Text style={styles.text}>{props.recipe.strInstructions}</Text>
      </Flex>
    </Flex>
  );
}

// dateModified
// :
// null
// idMeal
// :
// "52874"
// ingredients
// :
// (15) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// strArea
// :
// "British"
// strCategory
// :
// "Beef"
// strCreativeCommonsConfirmed
// :
// null
// strDrinkAlternate
// :
// null
// strImageSource
// :
// null
// strIngredient1
// :
// "Beef"
// strIngredient2
// :
// "Plain Flour"
// strIngredient3
// :
// "Rapeseed Oil"
// strIngredient4
// :
// "Red Wine"
// strIngredient5
// :
// "Beef Stock"
// strIngredient6
// :
// "Onion"
// strIngredient7
// :
// "Carrots"
// strIngredient8
// :
// "Thyme"
// strIngredient9
// :
// "Mustard"
// strIngredient10
// :
// "Egg Yolks"
// strIngredient11
// :
// "Puff Pastry"
// strIngredient12
// :
// "Green Beans"
// strIngredient13
// :
// "Butter"
// strIngredient14
// :
// "Salt"
// strIngredient15
// :
// "Pepper"
// strIngredient16
// :
// ""
// strIngredient17
// :
// ""
// strIngredient18
// :
// ""
// strIngredient19
// :
// ""
// strIngredient20
// :
// ""
// strInstructions
// :
// "Preheat the oven to 150C/300F/Gas 2.\r\nToss the beef and flour together in a bowl with some salt and black pepper.\r\nHeat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole.\r\nFry until browned on each side, then remove and set aside. Repeat with the remaining oil and beef.\r\nReturn the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper.\r\nCover with a lid and place in the oven for two hours.\r\nRemove from the oven, check the seasoning and set aside to cool. Remove the thyme.\r\nWhen the beef is cool and you're ready to assemble the pie, preheat the oven to 200C/400F/Gas 6.\r\nTransfer the beef to a pie dish, brush the rim with the beaten egg yolks and lay the pastry over the top. Brush the top of the pastry with more beaten egg.\r\nTrim the pastry so there is just enough excess to crimp the edges, then place in the oven and bake for 30 minutes, or until the pastry is golden-brown and cooked through.\r\nFor the green beans, bring a saucepan of salted water to the boil, add the beans and cook for 4-5 minutes, or until just tender.\r\nDrain and toss with the butter, then season with black pepper.\r\nTo serve, place a large spoonful of pie onto each plate with some green beans alongside."
// strMeal
// :
// "Beef and Mustard Pie"
// strMealThumb
// :
// "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg"
// strMeasure1
// :
// "1kg"
// strMeasure2
// :
// "2 tbs"
// strMeasure3
// :
// "2 tbs"
// strMeasure4
// :
// "200ml"
// strMeasure5
// :
// "400ml"
// strMeasure6
// :
// "1 finely sliced"
// strMeasure7
// :
// "2 chopped"
// strMeasure8
// :
// "3 sprigs"
// strMeasure9
// :
// "2 tbs"
// strMeasure10
// :
// "2 free-range"
// strMeasure11
// :
// "400g"
// strMeasure12
// :
// "300g"
// strMeasure13
// :
// "25g"
// strMeasure14
// :
// "pinch"
// strMeasure15
// :
// "pinch"
// strMeasure16
// :
// ""
// strMeasure17
// :
// ""
// strMeasure18
// :
// ""
// strMeasure19
// :
// ""
// strMeasure20
// :
// ""
// strSource
// :
// "https://www.bbc.co.uk/food/recipes/beef_and_mustard_pie_58002"
// strTags
// :
// "Meat,Pie"
// strYoutube
// :
// "https://www.youtube.com/watch?v=nMyBC9staMU"
// [[Prototype]]
// :
// Object
