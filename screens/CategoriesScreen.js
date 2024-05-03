import { FlatList, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function renderCategoryItem(itemData) {
    return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color}/>;
} 

function CategoriesScreen() {
    return (
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />
    );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  
});